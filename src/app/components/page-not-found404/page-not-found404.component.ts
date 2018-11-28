import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-page-not-found404",
  templateUrl: "./page-not-found404.component.html",
  styleUrls: ["./page-not-found404.component.css"]
})
export class PageNotFound404Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  backToWebsite() {
    this.router.navigate(["/"]);
  }
}
