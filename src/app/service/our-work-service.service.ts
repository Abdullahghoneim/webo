import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IEourWork } from "../models/ourWork";
@Injectable({
  providedIn: "root"
})
export class OurWorkServiceService {
  constructor(private http: HttpClient) {}
  _URL =
    "https://raw.githubusercontent.com/Abdullahghoneim/ourWork.json/master/ourWork.json";

  getProjects(): Observable<IEourWork> {
    return this.http.get<IEourWork>(this._URL);
  }
}
