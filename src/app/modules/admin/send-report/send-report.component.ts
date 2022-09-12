import { Component, OnInit } from '@angular/core';
import { AdmissionService } from 'src/app/services/admission.service';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


interface Grade {
  name: string;
}

interface Completedapplicants {
  workflow_instance_id: string,
  application_status: string,
  fullname: string,
  email: string,
  student_firstname: string,
  student_lastname: string,
  student_dob: string,
  student_phone: string,
  student_address: string,
  student_sex: string,
  student_race: string,
  student_nationality: string,
  student_religion: string,
  student_current_grade_level: string,
  parent1_firstname: string,
  parent1_lastname: string,
  parent1_relationship: string,
  parent1_phone:  string,
  parent1_email:  string,
  parent1_address:  string,
  parent2_firstname:  string,
  parent2_lastname:  string,
  parent2_relationship:  string,
  parent2_phone:  string,
  parent2_email:  string,
  parent2_address:  string,
  verified:  string
}

@Component({
  selector: 'app-send-report',
  templateUrl: './send-report.component.html',
  styleUrls: ['./send-report.component.scss']
})
export class SendReportComponent implements OnInit {

  public completed_applicants: Completedapplicants[] = []
  public current_applicant: Completedapplicants
  public parent_email: string
  isLoading = false
  sendReport = false
  isscorecard = false
  current_grade: string = "null"
  grades: Grade[] = [
    {name: 'Kinder Garden'},
    {name: '1st Grade'},
    {name: '2nd Grade'},
    {name: '3rd Grade'},
    {name: '4th Grade'},
    {name: '5th Grade'},
    {name: '6th Grade'},
    {name: '7th Grade'},
    {name: '8th Grade'},
    {name: '9th Grade'},
    {name: '10th Grade'},
    {name: '11th Grade'},
    {name: '12th Grade'}
  ]
  all_applicants: any
  constructor(private admissionservice: AdmissionService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoading = true
    this.admissionservice.verifiedapplicants()
    .subscribe(
      Response => {
          this.all_applicants = JSON.parse(JSON.stringify(Response))
          this.isLoading = false
          this.current_grade = "null"
      },
      (err:any) => {
        this.isLoading = false
        console.log(err)
      }
    )
  }

  viewapplications(grade)
  {
    this.isLoading = true
    this.current_grade = grade
    let completed: Completedapplicants[] = []
    completed = this.all_applicants[grade]
    this.completed_applicants = completed
    this.isLoading = false
  }

  showparentdetails(applicant: Completedapplicants)
  {
    this.isLoading = true
    this.current_applicant = applicant
    this.sendReport = true
    this.isscorecard = false
    this.isLoading = false
  }

  showreport(email: string)
  {
    this.isLoading = true
    this.parent_email = email
    this.sendReport = true
    this.isscorecard = true
    this.isLoading = false
  }

  studentadmissionform = new FormGroup(
    {
      mathsscore: new FormControl('', [Validators.required]),
      sciencescore: new FormControl('',[Validators.required]),
      socialscore: new FormControl('',[Validators.required]),
      tamilscore: new FormControl('',[Validators.required]),
      englishscore:  new FormControl('',[Validators.required])
    }
  );
  
  findresult(score)
  {
    if (score < 40 ){
      return "FAIL"
    }
    else {
      return "PASS"
    }
  }

  submit() {
    if(this.studentadmissionform.valid)
    {
      this.isLoading = true
      let mathsscore = this.studentadmissionform.value.mathsscore
      let mathsresult = this.findresult(mathsscore)
      let sciencescore = this.studentadmissionform.value.sciencescore
      let scienceresult = this.findresult(sciencescore)
      let socialscore = this.studentadmissionform.value.socialscore
      let socialresult = this.findresult(socialscore)
      let tamilscore = this.studentadmissionform.value.tamilscore
      let tamilresult = this.findresult(tamilscore)
      let englishscore = this.studentadmissionform.value.englishscore
      let englishresult = this.findresult(englishscore)
      let totalscore = mathsscore+sciencescore+socialscore+tamilscore+englishscore
      this.studentadmissionform.reset()
      let body = {
        mathsscore: mathsscore,
        mathsresult: mathsresult,
        sciencescore: sciencescore,
        scienceresult: scienceresult,
        socialscore: socialscore,
        socialresult: socialresult,
        tamilscore: tamilscore,
        tamilresult: tamilresult,
        englishscore: englishscore,
        englishresult: englishresult,
        totalscore: totalscore,
        parentemail: this.parent_email,
        studentemail: this.current_applicant.email,
        studentname: this.current_applicant.student_firstname,
        studentgrade: this.current_grade
      }
      this.admissionservice.sendReport(body)
      .subscribe(
        Response => {
          let response_data = JSON.parse(JSON.stringify(Response))
          let message = response_data.message
          this.dialog.open(DialogComponent,{
            width: '35rem',
            height: '10rem',
            data: {
              value: message
            }
          })
          this.isLoading = false
          this.sendReport = false
          this.isscorecard = false
        },
        (err:any) => {
          let response_data = JSON.parse(JSON.stringify(err))
          let message = response_data.message
          this.isLoading = false
          this.dialog.open(DialogComponent,{
            width: '30rem',
            height: '8rem',
            data: {
              value: "Error in Sending the signature Request"
            }
          })
          this.sendReport = false
          this.isscorecard = false
          this.isLoading = false
        }
      )

    }
    else
    {
      console.log("Invalid form")
    }
  }
  setverified() {
    throw new Error('Method not implemented.');
  }
  setunverified() {
    throw new Error('Method not implemented.');
  }
}

