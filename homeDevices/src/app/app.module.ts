import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DeviceControlComponent } from './components/device-control/device-control.component';
import { AppRoutingModule } from './app-routing.module'; // Include the AppRoutingModule
import { HttpClientModule } from '@angular/common/http';
import { LightsService } from './services/lights.service'; // Import lights service

@NgModule({
  declarations: [
    AppComponent,
    DeviceControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule // Include the AppRoutingModule here
  ],
  providers: [LightsService], // Including the LightsService in providers
  bootstrap: [AppComponent]
})
export class AppModule { }
