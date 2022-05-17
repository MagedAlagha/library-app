import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment as env } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailReactiveComponent } from './email-reactive/email-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsletterComponent,
    EmailReactiveComponent,
  ],
  imports: [
    //firebase config
    provideFirebaseApp(() => initializeApp(env.firebase)),
    // firestoreConfig
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
