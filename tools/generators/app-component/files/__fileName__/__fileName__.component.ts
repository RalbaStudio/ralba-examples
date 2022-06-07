import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '<%= prefix %>-<%= fileName %>',
  templateUrl: '<%= fileName %>.component.html',
  styleUrls: ['./<%= fileName %>.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class <%= className %>Component {

}