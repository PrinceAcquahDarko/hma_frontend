import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationGuard } from 'src/app/authentication.guard';
import { InterfaceComponent } from 'src/app/accountDashboard/interface/interface.component';
import { InterfaceComponent  as docInterface} from 'src/app/docDashboard/interface/interface.component'
import { InterfaceComponent  as nurse} from 'src/app/nurseDashboard/interface/interface.component'
import { InterfaceComponent  as lab} from 'src/app/labDashboard/interface/interface.component'
import { InterfaceComponent  as pharm} from 'src/app/pharmDashboard/interface/interface.component'
import { InterfaceComponent  as admin} from 'src/app/adminDashboard/interface/interface.component'
import { FrontEndComponent } from 'src/app/frontEnd/front-end/front-end.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([

      //for account
      {path: 'user/account', canLoad: [AuthenticationGuard], component:InterfaceComponent, data: {claimType: 'account'},
        loadChildren: () => import('../../accountDashboard/account.module').then(m => m.AccountModule)
    },

    //for frontend
    {path: 'user/frontend', canLoad: [AuthenticationGuard], component:FrontEndComponent, data: {claimType: 'frontend'},
    loadChildren: () => import('../../frontEnd/front-end.module').then(m => m.FrontEndModule)
},

//for doctor
{path: 'user/doctor',  canLoad: [AuthenticationGuard],  component:docInterface, data: {claimType: 'doctor'},
loadChildren: () => import('../../docDashboard/doctors.module').then(m => m.DoctorsModule)
},

//for nurse
{path: 'user/nurse', component:nurse, data: {claimType: 'nurse'},
loadChildren: () => import('../../nurseDashboard/nurse.module').then(m => m.NurseModule)
},

//for lab
{path: 'user/lab',canLoad: [AuthenticationGuard],  component:lab, data: {claimType: 'lab'},
loadChildren: () => import('../../labDashboard/lab.module').then(m => m.LabModule)
},

//for pharm
{path: 'user/pharmacy',  component:pharm, data: {claimType: 'pharmacy'},
loadChildren: () => import('../../pharmDashboard/pharm/pharm.module').then(m => m.PharmModule)
},

//for admin
{path: 'user/admin', canLoad: [AuthenticationGuard], component:admin, data: {claimType: 'admin'},
loadChildren: () => import('../../adminDashboard/admin.module').then(m => m.AdminModule)
},



    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModuleModule { }
