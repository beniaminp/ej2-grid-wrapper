import { DefaultComponent } from './default.component';



import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule, Type, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';































import { SharedModule } from './common/shared.module';















import { OrdersService } from './order.service';

import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';


import { GridWrapperComponent } from './custom-grid/grid-wrapper/grid-wrapper.component';
import { AppColumnDirective } from './custom-grid/app-column.directive';
import { AppColumnsDirective } from './custom-grid/app-columns.directive';
 
import { MyCompTestComponent }from './custom-grid/my-comp-test/my-comp-test.component';




@NgModule({
  imports: [CommonModule, HttpModule, ToolbarModule, GridAllModule, SharedModule,
    NumericTextBoxAllModule, DialogModule, DatePickerAllModule, DropDownListAllModule, ReactiveFormsModule, FormsModule, HttpModule, JsonpModule, BrowserModule],
  declarations: [DefaultComponent, GridWrapperComponent, AppColumnDirective, AppColumnsDirective, MyCompTestComponent],
  bootstrap: [DefaultComponent]
})
export class AppModule { }