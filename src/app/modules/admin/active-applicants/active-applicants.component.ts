import { Component, OnInit } from '@angular/core';
import {AdmissionService} from 'src/app/services/admission.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

interface Appliedapplicants {
  fullname: string;
  workflow_instance_id: string;
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
  constructor(private admissionservice: AdmissionService,public dialog: MatDialog) {}
  ngOnInit(): void {
      this.isLoading = true
      this.admissionservice.activeapplicants()
      .subscribe(
        Response => {
            let response_data = JSON.parse(JSON.stringify(Response))
            this.applicants = response_data.active
            this.isLoading = false
        },
        (err:any) => {
          this.isLoading = false
          console.log(err)
        }
      )
  }

  sendReminder(workflowid: any) {
      this.isLoading = true
      let body = {
        workflow_instance_id: workflowid
      }
      this.admissionservice.sendReminder(body).subscribe(
        (response:any) => {
          let response_data = JSON.parse(JSON.stringify(response))
          let message = response_data.message
          this.isLoading = false
          this.dialog.open(DialogComponent,{
            width: '35rem',
            height: '10rem',
            data: {
              value: message
            }
          })
        },
        (error:any) => {
          let response_data = JSON.parse(JSON.stringify(error))
          let message = response_data.message
          this.isLoading = false
          this.dialog.open(DialogComponent,{
            width: '30rem',
            height: '8rem',
            data: {
              value: "Issue in sending the reminder"
            }
          })
        }
      )
  }

  deleteApplication(workflowid:any,index:any,email:any) {
    this.isLoading = true
    let body = {
      workflow_instance_id: workflowid,
      email: email
    }
    this.admissionservice.deleteApplication(body).subscribe(
      (response:any) => {
        console.log(response.data)
        let response_data = JSON.parse(JSON.stringify(response))
        let message = response_data.message
        this.isLoading = false
        this.applicants.splice(index,1)
        this.dialog.open(DialogComponent,{
          width: '35rem',
          height: '10rem',
          data: {
            value: message
          }
        })
      },
      (error:any) => {
        console.log(error.data)
        let response_data = JSON.parse(JSON.stringify(error))
        let message = response_data.message
        this.isLoading = false
        this.dialog.open(DialogComponent,{
          width: '35rem',
          height: '10rem',
          data: {
            value: "Error in deleting the application"
          }
        })
      }
    )
}

}