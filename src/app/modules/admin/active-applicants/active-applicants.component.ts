import { Component, OnInit } from '@angular/core';
import {AdmissionService} from 'src/app/services/admission.service'

interface Appliedapplicants {
  fullname: string;
  workflowid: string;
  email: string;
}

@Component({
  selector: 'app-active-applicants',
  templateUrl: './active-applicants.component.html',
  styleUrls: ['./active-applicants.component.scss']
})
export class ActiveApplicantsComponent implements OnInit {
  isLoading = false
  public applicants: Appliedapplicants[] = []
  constructor(private admissionservice: AdmissionService) {}
  ngOnInit(): void {
      this.isLoading = true
      this.admissionservice.activeapplicants()
      .subscribe(
        Response => {
            let response_data = JSON.parse(JSON.stringify(Response))
            this.applicants = response_data.active
            console.log(this.applicants)
            this.isLoading = false
        },
        (err:any) => {
          this.isLoading = false
          console.log(err)
        }
      )
  }
}
