import { Component, Input } from '@angular/core';
import { BaseGridComponent, Output} from '@ralba/core/web/ui';
import { <%= constantName %>_TEST_DATA } from './<%= fileName %>.test.data';
import { <%= className %>ColumnsType } from './<%= fileName %>-columns.type';

@Component({
  selector: '<%= prefix %>-<%= fileName %>',
  templateUrl: '<%= fileName %>.component.html',
  styleUrls: ['./<%= fileName %>.component.scss']
})

export class <%= className %>Component extends BaseGridComponent<<%= className %>ColumnsType>{
  // comment this after test
  @Input() loading = false;
  @Input() data: <%= className %>ColumnsType[] = <%= constantName %>_TEST_DATA;

  // @Input() enableSelection = false;
  // @Output() selectionChange = new EventEmitter<<%= className %>ColumnsType[]>();
}