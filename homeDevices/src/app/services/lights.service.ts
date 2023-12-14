import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightsService {
  private apiUrl = 'https://your-api-url/api/lights'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  private isLightsOn: boolean = false;

  toggleLights(): Observable<any> {
    return this.http.post(`${this.apiUrl}/toggle`, {});
  }

  areLightsOn(): boolean {
    return this.isLightsOn;
  }
}
