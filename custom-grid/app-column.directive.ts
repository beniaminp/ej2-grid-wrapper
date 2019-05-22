import { Directive, Input, ContentChild, TemplateRef, OnInit } from '@angular/core';

@Directive({
  selector: 'app-column'
})
export class AppColumnDirective implements OnInit{
  @Input('field') field;
  @Input('headerText') headerText;
  @Input('width') width;

  @ContentChild('template')
  public template: TemplateRef<string>;

  constructor() { }

  ngOnInit(){

  }

}