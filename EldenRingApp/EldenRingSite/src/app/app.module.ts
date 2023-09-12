import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import {HttpClientModule} from '@angular/common/http';
import { EldenringapiserviceService } from './service/eldenringapiservice.service';
import { AshOfWarDetailComponent } from './ash-of-war-detail/ash-of-war-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    AshOfWarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EldenringapiserviceService, TopnavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
