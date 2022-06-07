import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  <%= className %>PageComponent,
} from './pages';



const routes: Routes = [
  {
    path: '',
    component: <%= className %>PageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class <%= className %>RoutingModule {}