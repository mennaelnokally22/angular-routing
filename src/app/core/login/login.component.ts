import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { MatSnackBar } from "@angular/material/snack-bar";

import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  hide = true;
  logIn: FormGroup;
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [
    Validators.required,
    Validators.minLength(6),
  ]);
  getErrorMessage() {
    if (this.email.hasError("required")) {
      return "You must enter a value";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  constructor(
    private authService: AuthService,
    private routerService: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.logIn = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  onSubmit() {
    const { email, password } = this.logIn.value;
    console.log(email, password);
    this.authService.login(email, password).subscribe(
      (data) => {
        this.routerService.navigate([""]);
        this.snackBar.open("Welcome", "Dismiss");
        console.log(this.authService.currentUser);
      },
      (err) => {
        console.log(err);
        this.snackBar.open(`${err.error.message} try again later`, "Dismiss");
      }
    );
  }
}
