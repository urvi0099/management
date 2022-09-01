import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginform = this.fb.group({
      // username: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  loginuser() {
    this.http.get<any>('http://localhost:3000/loginuser').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.username === this.loginform.value.username &&
            a.password === this.loginform.value.password
          );
        });
        if (user) {
          alert('login success');
          this.loginform.reset();
          this.router.navigate(['form']);
        } else {
          alert('user not found');
        }
      },
      (err) => {
        alert('something went wrong!!!');
      }
    );
    // ********************kgbmkgdmbkdfmb
    // if (
    //   this.loginform.value.username == 'admin' &&
    //   this.loginform.value.password == 'admin123'
    // ) {
    //   alert('Login Successful');
    //   this.router.navigate(['/home']);
    // } else {
    //   alert('User name or password is wrong.');
    // }
    // this.loginform.reset();
    // console.log(this.loginform.value.password);
  }
  get Username() {
    return this.loginform.get('username') as FormControl;
  }
  get Password() {
    return this.loginform.get('password') as FormControl;
  }
}
