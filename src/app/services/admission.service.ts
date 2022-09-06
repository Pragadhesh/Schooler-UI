import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, BASE_URL } from '../constants/api-constants'

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private http: HttpClient) { }

  applyAdmission(body: any) {
    return this.http.post('http://localhost:8000/student',body)
  }

  activeapplicants() {
    return this.http.get(`${BASE_URL}${API.GET_APPLICANTS_INFO}`)
  }
}