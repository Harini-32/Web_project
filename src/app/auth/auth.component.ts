import { StoreService } from "./../services/store.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ErrorMessages } from "../error.model";
import { AccountService } from "./auth.service";
import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Component({
  selector: "app-account",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  public emailId: string;
  public password: string;
  public showLogin = false;
  public errors: any = [];
  public showSuccessMsg = false;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private storeService: StoreService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((qparms) => {
      if (qparms["logout"] === "1") {
        this.doLogout();
      }
    });
  }

  toggleLink() {
    this.showLogin = !this.showLogin;
    this.emailId = "";
    this.password = "";
    this.errors = [];
  }

  doLogout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("books");
    localStorage.removeItem("token");
    this.storeService.setUser();
  }

  onSubmit() {
    this.errors = [];
    if (this.showLogin) {
      this.doLogin();
    } else {
      this.doRegister();
    }
  }

  doLogin() {
    const userInfo = {
      emailId: this.emailId,
      password: this.password,
      returnSecureToken: true,
    };
    this.getUser(userInfo);
  }
  getUser(userInfo) {
    this.http.post("http://localhost:3000/api/login", userInfo).subscribe(
      (data) => {
        console.log("login data : ", data);
        localStorage.setItem("userId", data["_id"]);
        this.storeService.setUser();
        this.router.navigate(["books"]);
      },

      (err) => {
        console.log(err.error);
        this.errors.push(ErrorMessages[err.error.error.message]);
      }
    );
  }

  doRegister() {
    const userInfo = {
      emailId: this.emailId,
      password: this.password,
    };
    console.log(this.emailId);
    console.log(this.password);
    this.addUser(userInfo);
  }
  addUser(userInfo) {
    console.log(userInfo);
    this.http
      .post("http://localhost:3000/api/register", userInfo)
      .subscribe((data) => {
        console.log("register data : ", data);
        this.showSuccessMsg = true;
      });

    (err) => {
      this.errors.push(ErrorMessages[err.error.error.message]);
    };
  }

  closeToaster() {
    this.showSuccessMsg = false;
  }
}
