import { Component, OnInit } from '@angular/core';
import { MovieControlService } from '../movie-control.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  oneMovie: Object;
  movieId: string;
  theList = this.theMovieList.movies;

  constructor(private theMovieList: MovieControlService, private myRoute: ActivatedRoute) { }

  ngOnInit() {
    this.myRoute.params.subscribe((paramsResult) => {
    this.movieId = paramsResult['id'];
    console.log(this.movieId);

    this.oneMovie = this.theMovieList.getMoviesById(this.movieId);
    });
  }

}
