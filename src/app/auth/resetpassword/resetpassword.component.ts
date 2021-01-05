import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  resetPassword:boolean = true;
  resetSuccess:boolean = false;
  constructor() { }

  ngOnInit(): void {
    const togglePassword = document.querySelector('#togglePassword');
    const togglePassword2 = document.querySelector('#togglePassword2');
    const password = document.querySelector('#password');
    const password2 = document.querySelector('#password2');

    togglePassword.addEventListener('click', function (e) {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });
    togglePassword2.addEventListener('click', function (e) {
      const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
      password2.setAttribute('type', type);
      this.classList.toggle('fa-eye-slash');
    });
  }

  changePassword() {
    this.resetPassword = false;
    this.resetSuccess = true;
  }
}
