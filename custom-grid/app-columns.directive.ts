import { Directive, ContentChildren, QueryList } from '@angular/core';

import { AppColumnDirective } from './app-column.directive';

@Directive({
  selector: 'app-columns' 
})
export class AppColumnsDirective {

  @ContentChildren(AppColumnDirective, {descendants: true}) 
  public columns: QueryList<AppColumnDirective>;

  constructor() { }

}