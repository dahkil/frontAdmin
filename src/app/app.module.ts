import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { ProfiladminComponent } from './profiladmin/profiladmin.component';
import { SidebareComponent } from './sidebare/sidebare.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    
    AdminDashbordComponent,
    AdminAuthComponent,
    ProfiladminComponent,
    SidebareComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [ ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
