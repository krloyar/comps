import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {

  data = [
    {name: 'Bantu Patel', age: 22, job: 'Designer'},
    {name: 'Vaishnavi', age: 20, job: 'Developer'},
    {name: 'Susan', age: 19, job: 'Engineer'},
    {name: 'Amit', age: 25, job: 'Frontend Developer'}
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
  ];

  nav_tab = ['Bio', 'Company', 'Partner', 'Coding']

}
