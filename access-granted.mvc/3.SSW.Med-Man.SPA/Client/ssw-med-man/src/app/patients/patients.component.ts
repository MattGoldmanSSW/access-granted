import { Component, OnInit } from '@angular/core';
import { PatientDTO } from '../../helpers/api-client';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientService: PatientService;

  patients: PatientDTO[] = [];

  displayedColumns: string[] = ['name', 'dob', 'scripts', 'admins'];

  arePatients: boolean;

  constructor(private patientsService: PatientService) {
    this.patientService = patientsService;
   }

  ngOnInit() {
    this.patientService.getPatients()
    .subscribe(result => {
      this.patients = result;
      this.arePatients = this.patients.length > 0;
    });
  }

}
