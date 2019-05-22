import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { AppColumnsDirective } from '../app-columns.directive'
import { EditService, PageService, CommandColumnService, CommandModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-grid-wrapper',
  templateUrl: './grid-wrapper.component.html'
})
export class GridWrapperComponent{
  @Input('datasource') datasource;
  
  public editSettings: Object;
  public toolbar: string[];
  public commands: CommandModel[];

  @ContentChild(AppColumnsDirective) gridColumns: AppColumnsDirective;

  constructor() { 
      this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
      this.toolbar = ['Add', 'Edit', 'Delete'];
      this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
        { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
        { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
        { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  } 

}