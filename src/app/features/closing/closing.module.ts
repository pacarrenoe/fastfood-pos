import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClosingRoutingModule } from './closing-routing.module';
import { ClosingComponent } from './closing.component';


@NgModule({
  declarations: [
    ClosingComponent
  ],
  imports: [
    CommonModule,
    ClosingRoutingModule
  ]
})
export class ClosingModule { }
