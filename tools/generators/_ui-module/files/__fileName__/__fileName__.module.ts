import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { <%= className %>Component } from './<%= fileName %>.component';
import { TranslocoModule } from '@ngneat/transloco';
//import { TranslocoLocaleModule } from '@ngneat/transloco-locale';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    //TranslocoLocaleModule,
  ],
  exports: [<%= className %>Component],
  declarations: [<%= className %>Component],
})
export class <%= className %>Module {}