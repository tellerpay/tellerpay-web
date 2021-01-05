import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  resetPassword: boolean = true;
  resetSuccess: boolean = false;
  email: any= '';
  constructor() { }

  ngOnInit(): void {
  }


  sendEmail() {
    this.resetPassword = false;
    this.resetSuccess = true;
  }
}
