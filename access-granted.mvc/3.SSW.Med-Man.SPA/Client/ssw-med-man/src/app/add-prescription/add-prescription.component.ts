import { Component, OnInit } from '@angular/core';
import { PrescriptionDTO, PrescriptionsClient, PatientsClient, MedicationsClient, PatientDTO } from '../../helpers/api-client';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {

  addScriptDTO: PrescriptionDTO = {id: null, medication: null, patient: null, dose: null};

  constructor(private scriptClient: PrescriptionsClient, private router: Router, private _snakBar: MatSnackBar, private patientsClient: PatientsClient, private medicationsClient: MedicationsClient) { }

  patients: PatientDTO[] = [];
  filteredPatients: Observable<PatientDTO[]>;

  patientControl = new FormControl;

  ngOnInit() {
    this.patientsClient.getPatients()
    .subscribe(result => {
      this.patients = result;
    });

    this.filteredPatients = this.patientControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.fullName),
        map(name => name ? this._filterPatients(name) : this.patients.slice())
      );
  }

  displayPatientFn(patient?: PatientDTO): string | undefined {
    return patient ? patient.fullName : undefined;
  }

  addPatient({value} : {value : PrescriptionDTO }){
    this.scriptClient.postPrescription(value)
    .subscribe(
      result => {
        if(result) {
          this._snakBar.open("Prescription added!", "OK" , {duration: 3000});
          this.router.navigate(['/prescriptions']);
        } else {
          this._snakBar.open("Adding prescriptions failed", "OK" , {duration: 3000});
        }
      },
      error => {
        this._snakBar.open("Adding prescription failed", "OK" , {duration: 3000});
        console.log(error);
      });
  }

  private _filterPatients(value: string): PatientDTO[] {
    const filterValue = value.toLowerCase();

    return this.patients.filter(patient => patient.fullName.toLowerCase().includes(filterValue));
  }

}
