// device.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiUrl = 'your-api-base-url'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  authenticate(): Observable<any> {
    const url = `${this.apiUrl}/api/lights/authenticate`;
    return this.http.post(url, {});
  }

  toggleLights(): Observable<any> {
    const url = `${this.apiUrl}/api/lights/toggle`;
    return this.http.post(url, {});
  }

  getLightsStatus(): Observable<any> {
    const url = `${this.apiUrl}/api/lights/status`;
    return this.http.get(url);
  }
}
