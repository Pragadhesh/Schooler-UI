import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

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

  constructor() { }

  ngOnInit(): void {
  }


  studentadmissionform = new FormGroup(
    {
      studentfirstname: new FormControl('', [Validators.required]),
      studentlastname: new FormControl('',[Validators.required]),
      studentdob: new FormControl('',[Validators.required]),
      studentsex: new FormControl('',[Validators.required]),
      studentrace: new FormControl('',[Validators.required]),
      studentnationality: new FormControl('',[Validators.required]),
      studentreligion: new FormControl('',[Validators.required]),
      studentphone: new FormControl('',[Validators.required]),
      studentemail: new FormControl('',[Validators.required, Validators.email]),
      studentaddress: new FormGroup({
        addressline1: new FormControl('',Validators.required),
        addressline2: new FormControl('',Validators.required),
        city: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
        zipcode: new FormControl('',Validators.required),
      }),
      studentcurrentgrade: new FormControl('',[Validators.required]),
      studentappliedgrade: new FormControl('',[Validators.required]),
      parent1firstname: new FormControl('', [Validators.required]),
      parent1lastname: new FormControl('',[Validators.required]),
      parent1phone: new FormControl('',[Validators.required]),
      parent1email: new FormControl('',[Validators.required, Validators.email]),
      parent1address: new FormGroup({
        addressline1: new FormControl('',Validators.required),
        addressline2: new FormControl('',Validators.required),
        city: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
        zipcode: new FormControl('',Validators.required),
      }),
      parent2firstname: new FormControl('', [Validators.required]),
      parent2lastname: new FormControl('',[Validators.required]),
      parent2phone: new FormControl('',[Validators.required]),
      parent2email: new FormControl('',[Validators.required, Validators.email]),
      parent2address: new FormGroup({
        addressline1: new FormControl('',Validators.required),
        addressline2: new FormControl('',Validators.required),
        city: new FormControl('',Validators.required),
        state: new FormControl('',Validators.required),
        zipcode: new FormControl('',Validators.required),
      }),
    }
  );
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  submit() {
    console.log(this.studentadmissionform.value);
  }
}
