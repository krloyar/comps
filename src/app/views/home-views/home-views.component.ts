import { Component } from '@angular/core';

@Component({
  selector: 'app-home-views',
  templateUrl: './home-views.component.html',
  styleUrls: ['./home-views.component.css']
})
export class HomeViewsComponent {

  stats = [
    { value: 99, label: '# of Users'},
    { value: 9999, label: 'Revenue'},
    { value: 1000, label: 'Reviews'},
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is fantastic couch i have ever sit on'
    },

    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is great dresser to put stuff on'
    }
  ];
}
