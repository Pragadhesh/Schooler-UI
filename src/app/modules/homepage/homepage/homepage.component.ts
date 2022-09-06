import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AdmissionService} from 'src/app/services/admission.service'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(private admissionservice: AdmissionService) { 
  }

  ngOnInit(): void {
  }
  emailerror = false
  isloading = false
  applyforadmission = true
  studentadmissionform = new FormGroup(
    {
      studentfullname: new FormControl('', [Validators.required]),
      studentemail: new FormControl('',[Validators.required, Validators.email]),
    }
  );
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  submit() {
    this.emailerror=false
    if(this.studentadmissionform.valid)
    {
      let fullname : String = this.studentadmissionform.value.studentfullname
      let email: String = this.studentadmissionform.value.studentemail
      this.isloading = true
      let body = {
        fullname: fullname,
        email: email
      }
      this.admissionservice.applyAdmission(body).subscribe(
          (response:any) => {
            this.isloading = false
            this.emailerror = false
            this.studentadmissionform.reset()
            this.applyforadmission = false
          },
          (error:any) => {
            this.emailerror = true
            this.isloading = false
          }
      )
    }
    else
    {
      console.log("Invalid form")
    }
  }

  home()
  {
    this.applyforadmission=true
  }

}
