import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailReactiveComponent } from './email-reactive/email-reactive.component';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Email', component: NewsletterComponent },
  { path: 'EmailReactive', component: EmailReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
