import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CskComponent } from './csk/csk.component';

const routes: Routes = [
  {
  path:'trophy',component:CskComponent

  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
