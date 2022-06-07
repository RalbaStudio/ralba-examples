import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { <%= className %>Component } from './<%= fileName %>.component';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    ReactiveFormsModule,
    RouterModule, 
    ButtonModule,
    FormlyModule,
  ],
  exports: [<%= className %>Component],
  declarations: [<%= className %>Component]
})
export class <%= className %>Module {}
