import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginComponent } from './features/auth/login/login.component';
import { AuthModule } from './features/auth/auth.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AuthModule,
    ReactiveFormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"fastfood-pos-1","appId":"1:24282129131:web:31dd45186db2d338f794ae","storageBucket":"fastfood-pos-1.firebasestorage.app","apiKey":"AIzaSyCiMT3NI_5GeD1RCPr6ZlFx0g7xZv6avNQ","authDomain":"fastfood-pos-1.firebaseapp.com","messagingSenderId":"24282129131","measurementId":"G-DXP57TCBC8"})),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
