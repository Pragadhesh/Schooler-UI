import { Component, OnInit } from '@angular/core';
import { AdmissionService } from 'src/app/services/admission.service';

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
  selector: 'app-verify-application',
  templateUrl: './verify-application.component.html',
  styleUrls: ['./verify-application.component.scss']
})
export class VerifyApplicationComponent implements OnInit {
  public completed_applicants: Completedapplicants[] = []
  isLoading = false
  verification_status = false
  togglebuttonvalue = "unverified"
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
  constructor(private admissionservice: AdmissionService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.admissionservice.completedapplicants()
    .subscribe(
      Response => {
          this.all_applicants = JSON.parse(JSON.stringify(Response))
          this.isLoading = false
          this.verification_status = false
          this.togglebuttonvalue = "unverified"
          this.current_grade = "null" 
      },
      (err:any) => {
        this.isLoading = false
        console.log(err)
      }
    )

  }
  setunverified()
  {
    if (this.current_grade != "null")
    {
      this.verification_status = false
      this.togglebuttonvalue = "unverified"
      this.viewapplications(this.current_grade)
    }
  }
  setverified()
  {
    if (this.current_grade != "null")
    {
    this.verification_status = true
    this.togglebuttonvalue = "verified"
    this.viewapplications(this.current_grade)
    }
  }
  viewapplications(grade)
  {
    this.isLoading = true
    this.current_grade = grade
    let completed: Completedapplicants[] = []
    let final_students: Completedapplicants[] = []
    completed = this.all_applicants[grade]
    if (completed)
    {
    for (let applicant of completed)
    {
      let current_status : string
        if(this.verification_status)
        {
          current_status = "true"
        }
        else
        {
          current_status = "false"
        }
        if (applicant["verified"] == current_status)
        {
          final_students.push(applicant)
        }
    }
    }
    this.completed_applicants = final_students
    this.isLoading = false
  }
}
