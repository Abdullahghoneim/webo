import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogDataService } from "src/app/service/blog-data.service";
import { BlogDataIE } from "src/app/models/blogDataInterface";
@Component({
  selector: "app-blog-detils",
  templateUrl: "./blog-detils.component.html",
  styleUrls: ["./blog-detils.component.css"]
})
export class BlogDetilsComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private blogdata: BlogDataService
  ) {}
  articles: BlogDataIE[];
  ngOnInit() {
    +this.router.snapshot.params["id"];

    // this.articles = this.blogdata.getBlogData();
  }
}
