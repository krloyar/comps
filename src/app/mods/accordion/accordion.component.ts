import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  @Input() items:any[] = [];

  openIndex: number = 0;

  onClick(index: number){

    if(index === this.openIndex){
      this.openIndex = -1;
    }else{
      this.openIndex = index;
    }
  }

}
