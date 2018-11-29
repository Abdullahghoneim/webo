import { Component, OnInit } from "@angular/core";
import { OurWorkServiceService } from "../../service/our-work-service.service";
import { IEourWork } from "src/app/models/ourWork";
@Component({
  selector: "app-our-projects",
  templateUrl: "./our-projects.component.html",
  styleUrls: ["./our-projects.component.css"]
})
export class OurProjectsComponent implements OnInit {
  projects: IEourWork;

  constructor(private ourWorkService: OurWorkServiceService) {}

  ngOnInit() {
    this.ourWorkService.getProjects().subscribe(data => {
      this.projects = data;
      console.log("Our work data", data);
    });
  }
}
