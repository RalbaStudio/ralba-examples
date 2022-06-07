import { Component} from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { <%= className %>FormType } from './<%= fileName %>-form.type';
import { <%= constantName %>_TEST_DATA } from './<%= fileName %>.test.data';
import { <%= constantName %>_INIT_DATA } from './<%= fileName %>.init.data';
import { BaseForm } from '@ralba/core/web/formly-light-weight';
//import { SelectType } from '@ralba/core/web/common';


@Component({
  selector: '<%= prefix %>-<%= fileName %>',
  templateUrl: '<%= fileName %>.component.html',
  styleUrls: ['./<%= fileName %>.component.scss']
})

export class <%= className %>Component extends BaseForm<<%= className %>FormType> {
  // comment this after test
  //@Input() data: <%= className %>ColumnsType[] = <%= constantName %>_TEST_DATA;


  // options: FormlyFormOptions = {
  //   formState: {
  //     employeeOptions: [],
  //   } 
  // };

  fields: FormlyFieldConfig[] = [
    //{
    //   key: 'name',
    //   type: 'input',
    //   className: 'p-col-12',
    //   templateOptions: {
    //     translate: true,
    //     label: 'translateKey', //Nebo rovnou string popisek
    //   },
    //},
    //{
    //   key: 'name',
    //   type: 'select',
    //   className: 'p-col-12',
    //   templateOptions: {
    //     label: 'translateKey',
    //     translate: true,
    //     translateOptions: true,
    //     options: [
    //       {
    //         label: 'translateKey',
    //         value: 'info',
    //       },
    //       {
    //         label: 'translateKey',
    //         value: 'warn',
    //       },
    //     ],
    //   },
    //},
  ];


  // _employeeOptions: SelectType[] = [];
  // @Input() set employeeOptions(value: SelectType[]) {
  //   this._employeeOptions = JSON.parse(
  //     JSON.stringify(sortByLabel(value || []))
  //   );
  //   this.options.formState = {
  //     ...this.options.formState,
  //     employeeOptions: this._employeeOptions,
  //   };
  // }

  constructor() {
    super(<%= constantName %>_INIT_DATA);
  }

  
}