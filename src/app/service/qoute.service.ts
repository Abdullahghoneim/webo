import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Iquote } from "../models/quoteModule";

@Injectable({
  providedIn: "root"
})
export class QouteService {
  private _URL = "https://talaikis.com/api/quotes/random/";
  constructor(private http: HttpClient) {}

  getQuote(): Observable<Iquote> {
    return this.http.get<Iquote>(this._URL);
  }
}
