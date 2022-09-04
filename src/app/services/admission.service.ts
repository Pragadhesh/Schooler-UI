import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, BASE_URL } from '../constants/api-constants'

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private http: HttpClient) { }

  applyAdmission(body: any) {
    console.log("reached")
    return this.http.post('http://localhost:8000/student',body)
  }
}