import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule,
         MatCardModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,
         MatSidenavModule,
         MatListModule } from '@angular/material';
import { PatientsComponent } from './patients/patients.component';
import { MedicationsComponent } from './medications/medications.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { AdministrationsComponent } from './administrations/administrations.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientsComponent,
    MedicationsComponent,
    PrescriptionsComponent,
    AdministrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
