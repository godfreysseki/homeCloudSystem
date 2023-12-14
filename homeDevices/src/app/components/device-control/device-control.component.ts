import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-device-control',
  templateUrl: './device-control.component.html',
  styleUrls: ['./device-control.component.css']
})
export class DeviceControlComponent implements OnInit {
  lightsOn: boolean;

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.updateLightsStatus();
  }

  toggleLights(): void {
    this.deviceService.toggleLights().subscribe(() => {
      this.updateLightsStatus();
    });
  }

  private updateLightsStatus(): void {
    this.deviceService.getLightsStatus().subscribe(response => {
      this.lightsOn = response.lightsOn;
    });
  }
}
