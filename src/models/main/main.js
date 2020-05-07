import './main.scss';
import { MovieList } from './movie-list/movie-list';
import { Search } from './search/search';
import Spinner from './spinner.html';

export class Main {
  constructor(rootNode) {
    this.rootNode = rootNode;
    this.movieListNode = null;

    this.search = null;
    this.moviesList = null;
    this.moviesData = null;

    this.page = 1;
    this.searchInputValue = 'dream';
    this.isMoviesFetch = false;
    this.firstBuildMain();
  }

  firstBuildMain() {
    this.buildSearch();
    this.firstBuildMovieList();
  }

  buildSearch() {
    this.searchNode = document.createElement('div');
    this.searchNode.classList.add('search-block');
    this.rootNode.append(this.searchNode);
    this.search = new Search(this.searchNode);
    this.search.searchSubmit = (value) => {
      this.page = 1;
      this.searchInputValue = value.trim();
      this.reBuildMovieList();
    };
  }

  async firstBuildMovieList() {
    this.movieListNode = document.createElement('div');
    this.movieListNode.classList.add('movie-list-block');
    this.rootNode.append(this.movieListNode);
    this.movieListNode.innerHTML = Spinner;
    this.moviesData = await this.getMovies();
    this.movieListNode.innerHTML = '';
    this.setMovieList();
  }

  async reBuildMovieList() {
    this.movieListNode.innerHTML = Spinner;
    this.moviesData = await this.getMovies();
    this.movieListNode.innerHTML = '';
    this.setMovieList();
  }

  setMovieList() {
    this.moviesList = new MovieList(this.movieListNode, this.moviesData);
    this.moviesList.getMoreMovies = () => {
      this.page++;
      this.appendMovieListSlides();
    };
  }

  async appendMovieListSlides() {
    if (!this.isMoviesFetch) {
      this.isMoviesFetch = true;
      this.moviesData = await this.getMovies();
      this.isMoviesFetch = false;
      this.moviesList.addNewSlides(this.moviesData.Search);
    }
  }

  async getMovies() {
    const API_KEY = '5a8359a3';
    const url = `https://www.omdbapi.com/?s=${this.searchInputValue}&page=${this.page}&apikey=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();

    for (let index = 0; index < data.Search.length; index++) {
      const urlImdb = `https://www.omdbapi.com/?i=${data.Search[index].imdbID}&apikey=${API_KEY}`;
      const resImdb = await fetch(urlImdb);
      const dataImdb = await resImdb.json();
      data.Search[index].rating = dataImdb.imdbRating;
    }

    return data;
  }
}
