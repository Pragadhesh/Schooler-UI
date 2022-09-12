import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, BASE_URL } from '../constants/api-constants'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  constructor(private http: HttpClient) { }

  applyAdmission(body: any) {
    return this.http.post(`${BASE_URL}${API.APPLY_ADMISSION}`,body)
  }

  activeapplicants() {
    return this.http.get(`${BASE_URL}${API.GET_APPLICANTS_INFO}`)
  }

  sendReminder(body: any) {
    return this.http.put(`${BASE_URL}${API.SEND_REMINDER}`,body)
  }

  deleteApplication(body: any){
    return this.http.put(`${BASE_URL}${API.DELETE_APPLICANT}`,body)
  }

  completedapplicants() {
    return this.http.get(`${BASE_URL}${API.GET_COMPLETED_APPLICANTS}`)
  }

  downloadApplicantform(body: any) {
    return this.http.post(`${BASE_URL}${API.GET_DOCUMENTS}`,body,
    {
      responseType: 'arraybuffer'
    }
    )
  }

  setverification(body: any) {
    return this.http.put(`${BASE_URL}${API.SET_VERIFICATION}`,body)
  }

  verifiedapplicants() {
    return this.http.get(`${BASE_URL}${API.GET_VERIFIED_APPLICANTS}`)
  }
}