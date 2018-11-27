import { Component, OnInit } from "@angular/core";
import { QouteService } from "src/app/service/qoute.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public quote;
  constructor(private quoteService: QouteService) {}

  ngOnInit() {
    this.quoteService.getQuote().subscribe(data => {
      this.quote = data;
    });
  }
}
