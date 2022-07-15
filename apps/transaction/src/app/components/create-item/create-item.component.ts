import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Services/item.service';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';

import * as action from '../../features/data/actions';
import * as ItemSelector from '../../features/data/selectors/index';
import { FormGroup} from '@angular/forms';
import {
  FormlyFieldConfig,
  FormlyFormOptions,

} from '@ngx-formly/core';

export interface FormItem {
  date?: string;
  name?: string;
  from?: string;
  to?: string;
  amount?: string;
  note?: string;
}

@Component({
  selector: 'tran-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.sass'],
})
export class CreateItemComponent implements OnInit {
  //items: Item[] = [];

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private store: Store<any>
  ) {}

  parameter = this.route.snapshot.queryParams;
  mode = this.isUpdateMode();
  items$ = this.store.pipe(select(ItemSelector.selectAllItems));


  form = new FormGroup({});
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'date',
      type: 'date-picker',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        showTime: false,
        returnFormat: 'date',
        required: true,
      },
    },
    {
      key: 'name',
      type: 'input',
      defaultValue: 'This is a default value',
      templateOptions: {
        label: 'Name',
        type: 'text',
        placeholder: 'Name',
        defaultValue: 'test',
        description: 'Write your name here',
        required: true,
      },
    },
    {
      key: 'from',
      type: 'input',
      templateOptions: {
        label: 'From',
        placeholder: 'From',
        defaultValue: '11',
        description: '',
        required: true,
      },
    },
    {
      key: 'to',
      type: 'input',
      templateOptions: {
        label: 'To',
        placeholder: 'To',
        description: '',
        required: true,
      },
    },
    {
      key: 'amount',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Amount',
        placeholder: 'Amount',
        description: '',
        required: true,
      },
    },
    {
      key: 'note',
      type: 'input',
      templateOptions: {
        label: 'Note',
        placeholder: '(MaxLenght = 30)',
        description: 'Write your name here',
        required: false,
        maxLength: 30,
        rows: 3,
      },
    },
  ];

  model: FormItem = {
    date: '2022-06-01',
    name: 'Test',
    to: 'Test',
    from: 'Test',
    amount: '123',
    note: 'Test',
  };

  ngOnInit() {
    //this.route.queryParams.pipe(filter((params) => params.order).subscribe((params)=>{console.log(params)}))
    if (this.isUpdateMode()) {
      const parameterAsString = this.parameter['id'];
      const saveItems = this.itemService.getItem();
      //console.log(saveItems);
      const objectWithId = saveItems.filter((obj) => {
        return obj.id === parameterAsString;
      });
      const newItem = this.itemService.getItemById(parameterAsString);
      this.model = {
        date: newItem?.date,
        name: newItem?.name,
        to: newItem?.to,
        from: newItem?.from,
        amount: newItem?.amount.toString(),
        note: newItem?.note,
      };
    }
    this.isUpdateMode();
    console.log(this.isUpdateMode());
  }

  buttonAction(model: FormItem): void {
    if (this.mode) {
      this.update(this.model);
    } else {
      this.add(this.model);
    }
  }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
  add(model: FormItem): void {
    // const id = uuidv4();
    // this.itemService.addItem({
    //   id: id || '',
    //   date: model.date || '',
    //   name: model.name || '',
    //   to: model.to || '',
    //   from: model.from || '',
    //   note: model.note || '',
    //   amount: parseFloat(model.amount || '0'),
    // });
    const id = uuidv4();
    this.store.dispatch(
      action.ItemActions.ADDED({
        item: {
          status: "available",
          id: id,
          date: model.date || '',
          name: model.name || '',
          to: model.to || '',
          from: model.from || '',
          note: model.note || '',
          amount: parseFloat(model.amount || '0'),
        },
      })
    );
    console.log("added");
  }

  update(model: FormItem): void {
    // this.itemService.updateItem(
    //   {
    //     id: this.parameter['id'] || '',
    //     date: model.date || '',
    //     name: model.name || '',
    //     to: model.to || '',
    //     from: model.from || '',
    //     note: model.note || '',
    //     amount: parseFloat(model.amount || '0'),
    //   },
    //   this.parameter['id']
    // );
    // this.store.dispatch(action.ItemActions.updateItem({ //change to UPDATE
    //   item: {
    //     id: this.parameter['id'] || '',
    //     date: model.date || '',
    //     name: model.name || '',
    //     to: model.to || '',
    //     from: model.from || '',
    //     note: model.note || '',
    //     amount: parseFloat(model.amount || '0')
    //   },
    // })
  // );
  console.log("updated");
}

  isUpdateMode() {
    const parameter = this.route.snapshot.queryParams;
    let isUpdateMode = false;
    if ('id' in parameter) {
      const parameterAsString = parameter['id'];
      //console.log(parameterAsString);
      const saveItems = this.itemService.getItem();
      //console.log(saveItems);
      const objectWithId = saveItems.filter((obj) => {
        return obj.id === parameterAsString;
      });
      console.log(objectWithId);
      isUpdateMode = true;
    }

    return isUpdateMode;
  }
}
