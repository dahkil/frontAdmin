import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ProfiladminComponent } from './profiladmin/profiladmin.component';
import { AuthGuard } from './guards/Auth.gards';

const routes: Routes = [
 {path:"dash",component:AdminDashbordComponent,canActivate: [AuthGuard]},
 {path:"",component:AdminAuthComponent},
 {path:"profiladmin",component:ProfiladminComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
