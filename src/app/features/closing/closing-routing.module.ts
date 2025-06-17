import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosingComponent } from './closing.component';

const routes: Routes = [{ path: '', component: ClosingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosingRoutingModule { }
