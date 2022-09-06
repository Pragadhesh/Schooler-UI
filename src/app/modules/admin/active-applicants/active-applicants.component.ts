import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-applicants',
  templateUrl: './active-applicants.component.html',
  styleUrls: ['./active-applicants.component.scss']
})
export class ActiveApplicantsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  isLoading = false

}
