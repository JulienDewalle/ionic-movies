import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  movies;
  constructor(private http: HttpClient) {}


  ionViewWillEnter() { 
    this.http
    .get('https://api.themoviedb.org/3/movie/now_playing?api_key=f022620a05af8fe4fa6be3e95ed6345e')
    .toPromise()
    .then(movies=>this.movies=movies.results);
    };
}
