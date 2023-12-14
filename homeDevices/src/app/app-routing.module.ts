import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceControlComponent } from './components/device-control/device-control.component';

const routes: Routes = [
  { path: '', redirectTo: '/device-control', pathMatch: 'full' },
  { path: 'device-control', component: DeviceControlComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
