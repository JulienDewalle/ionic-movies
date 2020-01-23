import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
movies;

  constructor(private http: HttpClient) {}


  ionViewWillEnter() { 
    this.http
    .get('https://api.themoviedb.org/3/movie/550?api_key=f022620a05af8fe4fa6be3e95ed6345e')
    .toPromise()
    .then(movies => this.movies = movies);
    };
  }
