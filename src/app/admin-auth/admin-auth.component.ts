import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  username: string = "";
  Password: string = "";

  signinForm!: FormGroup;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('accessToken') != null) {
      this._router.navigate(['/dash']);
    }
    this.buildSignInForm();
  }

  buildSignInForm() {
    this.signinForm = this._fb.group({
      userNamein: ['', [Validators.required]],
      Passwordin: ['', [Validators.required]]
    });
  }

  sign_in() {
    if (this.signinForm.invalid) {
      return;
    }
    const loginData = {
      username: this.username,
      password: this.Password
    };
    this.authService.login(loginData).subscribe(
      response => {
        console.log(response);
        const userData = response.user;
        localStorage.setItem("userAuth", JSON.stringify(userData));
        const accessToken = response.accessToken;
        localStorage.setItem("accessToken", accessToken);
        alert("Connected");
        console.log("Connected");
        this._router.navigate(['/dash']);
      },
      error => {
        console.error("Login error", error);
        alert("Login failed");
      }
    );
  }
}
