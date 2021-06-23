import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import {TableBrowserComponent } from './table-browser.component';

const routes : Routes = [{
  path : '',
  component : TableBrowserComponent,
  data : {
    title : 'customer Browser',
    icon: 'ti-layers',
    status : true
  }
}]
@NgModule({
  declarations: [TableBrowserComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgxDatatableModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
})
export class TableBrowserModule { }
