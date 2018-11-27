import { Component, OnInit } from "@angular/core";

import { OurWorkServiceService } from "../../service/our-work-service.service";
import { IEourWork } from "src/app/models/ourWork";

@Component({
  selector: "app-webdev",
  templateUrl: "./webdev.component.html",
  styleUrls: ["./webdev.component.css"]
})
export class WebdevComponent implements OnInit {
  projects: IEourWork;
  constructor(private ourWorkService: OurWorkServiceService) {}

  ngOnInit() {
    this.ourWorkService.getProjects().subscribe(data => {
      this.projects = data;
      console.log("Our work data", data);
    });
  }
}
