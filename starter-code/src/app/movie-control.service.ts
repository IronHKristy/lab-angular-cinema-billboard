import { Injectable } from '@angular/core';

@Injectable()
export class MovieControlService {

  movies:Array<any> = [
  {
    id: "1",
    title: "Movie1",
    poster: "http://www.iceposter.com/thumbs/MOV_9d751ace.jpg",
    synopsis: 'This movie is about a movie',
    genre: "Horror",
    year: 1998,
    director: "Some white dude",
    actors: "Some chick with big breasts",
    hours: 1.5,
    room: 14
  }, {
    id: "2",
    title: "Movie2",
    poster: "http://www.iceposter.com/thumbs/MOV_9d751ace.jpg",
    synopsis: 'This movie is about another movie',
    genre: "Cartoon",
    year: 1998,
    director: "Some creepy white dude",
    actors: "Purple Dinos",
    hours: .5,
    room: 12
  },
   {
    id: "3",
    title: "Movie3",
    poster: "http://www.iceposter.com/thumbs/MOV_9d751ace.jpg",
    synopsis: 'This is another movie about another movie',
    genre: "SciFi",
    year: 1998,
    director: "Some nerdy white dude",
    actors: "Erkel",
    hours: 1,
    room: 16
  }
  ];
  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMoviesById(id) {
    id--;
    return this.movies[id];
  }
}
