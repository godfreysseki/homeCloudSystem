// status.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  template: '<p>Lights are currently {{ lightsOn ? "on" : "off" }}</p>',
})
export class StatusComponent {
  @Input() lightsOn: boolean = false;
}
