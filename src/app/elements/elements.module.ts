import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { OlaceholderComponent } from './olaceholder/olaceholder.component';
import { TimesDirective } from './times.directive';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    OlaceholderComponent,
    TimesDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ElementsModule { }
