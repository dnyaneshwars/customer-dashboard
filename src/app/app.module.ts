import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddEditCustomerComponent } from './components/add-edit-customer/add-edit-customer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddEditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    // MatFormFieldModule, 
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
