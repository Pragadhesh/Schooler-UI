import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import {  ReactiveFormsModule} from '@angular/forms'

@NgModule({
  imports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [ MatDatepickerModule ],
})

export class MaterialModule {}