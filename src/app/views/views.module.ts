import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeViewsComponent } from './home-views/home-views.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    HomeViewsComponent,
    StatisticsComponent,
    ItemListComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
