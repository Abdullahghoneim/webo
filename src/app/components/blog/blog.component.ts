import { Component, OnInit } from '@angular/core';
import { BlogDataIE } from '../../models/blogDataInterface';
import { BlogDataService } from '../../service/blog-data.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articels: BlogDataIE[];

  constructor(private blogdata: BlogDataService) { }

  ngOnInit() {
   this.articels = this.blogdata.getBlogData();
  }

}
