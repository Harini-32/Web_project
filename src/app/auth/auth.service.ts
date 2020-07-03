import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class AccountService {
  public API_KEY = "AIzaSyCexkxxza7fcWQihF_0PKXZ8TsKLSqJX-c";
  private signupUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
    this.API_KEY;
  private loginUrl =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
    this.API_KEY;
  constructor(private http: HttpClient) {}

  createUser(userData: any) {
    return this.http.post(this.signupUrl, userData);
  }

  loginUser(userData: any) {
    return this.http.post(this.loginUrl, userData);
  }
}
