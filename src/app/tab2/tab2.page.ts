import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  movies;
  constructor(private http: HttpClient) {}

  ionViewWillEnter() { 
    this.http
    .get('https://api.themoviedb.org/3/movie/top_rated?api_key=f022620a05af8fe4fa6be3e95ed6345e')
    .toPromise()
    .then(movies=>this.movies=movies.results);
    };
}
