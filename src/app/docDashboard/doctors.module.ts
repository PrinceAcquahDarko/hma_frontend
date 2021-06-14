import { NgModule } from '@angular/core';
import { InterfaceComponent } from './interface/interface.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    InterfaceComponent,

  ],
  imports: [
    RouterModule.forChild([
        {path: 'user/doctor', component: InterfaceComponent}
    ]),
    SharedModule
  ]
})
export class DoctorsModule { }
