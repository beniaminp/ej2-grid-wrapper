import { Component, OnInit } from '@angular/core';
import { orderDetails } from './data';

@Component({
    selector: 'control-content',
    templateUrl: 'default.html'
})
export class DefaultComponent implements OnInit {
    public data: Object[] = [];

    ngOnInit(): void {
        this.data = orderDetails;
    }

    clicked(data){
      console.error(data);
    }
}