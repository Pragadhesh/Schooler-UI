import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    let response = {
      "9th Grade": [
          {
              "workflow_instance_id": "jsaeoUjVoh4Lz6PC",
              "application_status": "completed",
              "fullname": "Virat Kohli",
              "email": "rockybhaikohli@gmail.com",
              "student_firstname": "Pragadhesh",
              "student_lastname": "Gopal",
              "student_dob": "2022-09-21",
              "student_phone": "+91 9688827051",
              "student_address": "KSR Kalvi Nagar Varapalayam",
              "student_sex": "Male",
              "student_race": "Asian",
              "student_nationality": "India",
              "student_religion": "Hindu",
              "student_current_grade_level": "8th Grade",
              "parent1_firstname": "Demo",
              "parent1_lastname": "Ldkal",
              "parent1_relationship": "Father",
              "parent1_phone": "+91 9344367333",
              "parent1_email": "demo@gmail.com",
              "parent1_address": ";lfaskjd",
              "parent2_firstname": "Abi",
              "parent2_lastname": "Krish",
              "parent2_relationship": "Guardian",
              "parent2_phone": "4747393938",
              "parent2_email": "demo@gmail.com",
              "parent2_address": "asdlkkdkdkdkeo",
              "verified": "false"
          }
      ]
      }
    this.all_applicants = JSON.parse(JSON.stringify(response))
    console.log(this.all_applicants["9th Grade"])
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
    console.log("reached here")
    console.log(this.current_grade)
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
