import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdministrationsComponent } from './administrations/administrations.component';
import { MedicationsComponent } from './medications/medications.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { PatientsComponent } from './patients/patients.component';
import { LoginComponent } from './identity/login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes =[
    {path: 'patients', component:PatientsComponent},
    {path: 'medications', component: MedicationsComponent},
    {path: 'prescriptions', component: PrescriptionsComponent},
    {path: 'administrations', component: AdministrationsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component:HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);