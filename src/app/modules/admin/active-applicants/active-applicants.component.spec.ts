import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveApplicantsComponent } from './active-applicants.component';

describe('ActiveApplicantsComponent', () => {
  let component: ActiveApplicantsComponent;
  let fixture: ComponentFixture<ActiveApplicantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveApplicantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
