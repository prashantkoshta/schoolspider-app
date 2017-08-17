import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
  get isLoggedIn(): boolean {
    return true;
  }
}