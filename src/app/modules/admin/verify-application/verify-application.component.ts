import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-application',
  templateUrl: './verify-application.component.html',
  styleUrls: ['./verify-application.component.scss']
})
export class VerifyApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isLoading = false
  verification_status = false
  togglebuttonvalue = "unverified"
  setunverified()
  {
    this.verification_status = false
    this.togglebuttonvalue = "unverified"
  }
  setverified()
  {
    this.verification_status = true
    this.togglebuttonvalue = "verified"
  }
}
