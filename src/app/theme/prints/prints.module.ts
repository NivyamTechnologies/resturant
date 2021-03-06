import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './invoice/invoice.component';
import { PrintRoutingModule } from './prints-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    PrintRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class PrintsModule { }
