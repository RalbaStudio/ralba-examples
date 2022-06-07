import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { ButtonModule } from 'primeng/button';
import { <%= className %>Component } from './<%= fileName %>.component';
import {BadgeModule} from 'primeng/badge';
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
  RouterModule, ButtonModule, BadgeModule
  ],
  exports: [<%= className %>Component],
  declarations: [<%= className %>Component]
})
export class <%= className %>Module {}
