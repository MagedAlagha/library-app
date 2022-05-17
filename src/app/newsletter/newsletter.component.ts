import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  email: any = 'majed01234567@gmail.com';
  constructor() {}
  onSubmitForm(emailForm: any) {
    console.log(emailForm);
  }
  ngOnInit(): void {}
}
