import { Injectable } from '@angular/core';
import { PatientsClient, PatientDTO } from '../../helpers/api-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientsClient: PatientsClient;

  constructor(private patientClient: PatientsClient) { 
    this.patientsClient = patientClient;
  }

  getPatients(): Observable<PatientDTO[]>{
    return this.patientsClient.getPatients();
  }
}
