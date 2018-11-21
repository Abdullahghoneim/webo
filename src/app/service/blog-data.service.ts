import { Injectable } from '@angular/core';
import { BlogDataIE } from '../models/blogDataInterface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  constructor(private http: HttpClient) { }
  data = [
    {
      id: 1,
      title: 'some title',
      body: 'some body here',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/04/14/22/donut-3723751_960_720.jpg'
    },
    {
      id: 1,
      title: 'some title',
      body: 'some body here',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/04/14/22/donut-3723751_960_720.jpg'
    },
    {
      id: 1,
      title: 'some title',
      body: 'some body here',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/04/14/22/donut-3723751_960_720.jpg'
    },
    {
      id: 1,
      title: 'some title',
      body: 'some body here',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/04/14/22/donut-3723751_960_720.jpg'
    },
  ]
  getBlogData(): BlogDataIE[] {

    return this.data

  }
}
