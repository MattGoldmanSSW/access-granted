import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LottieAnimationViewModule} from 'ng-lottie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule,
         MatCardModule,
         MatDialogModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,
         MatSidenavModule,
         MatFormFieldModule,
         MatInputModule,
         MatListModule, 
         MatSnackBarModule,
         MatTableModule,
         MatDatepickerModule,
         MatNativeDateModule} from '@angular/material';
import { PatientsComponent } from './patients/patients.component';
import { MedicationsComponent } from './medications/medications.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { AdministrationsComponent } from './administrations/administrations.component';
import { routing } from './app.routing';
import { IdentityModule } from './identity/identity.module';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PatientsClient, MedicationsClient } from '../helpers/api-client';
import { TokenInterceptor } from './httpinterceptor';
import { AddPatientsComponent } from './add-patients/add-patients.component';
import { MedListComponent } from './med-list/med-list.component';
import { AddMedsDialogComponent } from './add-meds-dialog/add-meds-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientsComponent,
    MedicationsComponent,
    PrescriptionsComponent,
    AdministrationsComponent,
    HomeComponent,
    AddPatientsComponent,
    MedListComponent,
    AddMedsDialogComponent
  ],
  entryComponents: [
    AddMedsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatListModule,
    MatFormFieldModule,
    MatTableModule,
    BrowserAnimationsModule,
    routing,
    IdentityModule,
    LottieAnimationViewModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UserService,
    PatientsClient,
    MedicationsClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
