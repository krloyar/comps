import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-olaceholder',
  templateUrl: './olaceholder.component.html',
  styleUrls: ['./olaceholder.component.css']
})
export class OlaceholderComponent {

  @Input() header = true;
  @Input() lines = 4;

  constructor(){

  }

}
