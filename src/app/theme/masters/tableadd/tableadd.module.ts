import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableaddComponent} from './tableadd.component'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const routes : Routes = [{
  path : '',
  component : TableaddComponent,
  data : {
    title : 'Customer',
    icon : 'ti-layers',
    status : true
  }
}]
@NgModule({
  declarations: [TableaddComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})


export class TableaddModule { }
