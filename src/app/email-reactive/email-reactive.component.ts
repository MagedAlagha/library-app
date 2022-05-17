import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-email-reactive',
  templateUrl: './email-reactive.component.html',
  styleUrls: ['./email-reactive.component.css'],
})
export class EmailReactiveComponent implements OnInit {
  emailFrm!: FormGroup;
  constructor() {
    this.emailFrm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+.[a-z]{2,3}'),
      ]),
      fullName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z ]+'),
        Validators.maxLength(20),
        Validators.maxLength(4),
      ]),
    });
  }
  get name() {
    return this.emailFrm.get('fullName');
  }
  get email() {
    return this.emailFrm.get('email');
  }
  ngOnInit(): void {}
  onSubmitForm() {
    console.log(this.emailFrm.controls);
  }
}
