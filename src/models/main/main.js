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
    const OMDB_API_KEY = '5a8359a3';
    const TRANSLATE_API_KEY =
      'trnsl.1.1.20170506T133756Z.d523dbf15945aee5.28e6bba8287e893a63b6e59990a007a82116e5e1';
    let searchValue = this.searchInputValue;
    if (/[А-Яа-я]/.test(this.searchInputValue)) {
      const translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${TRANSLATE_API_KEY}&text=${searchValue}&lang=ru-en`;
      const translateRes = await fetch(translateUrl);
      const translateData = await translateRes.json();
      searchValue = translateData.text[0];
    }

    const oddbapiUrl = `https://www.omdbapi.com/?s=${searchValue}&page=${this.page}&apikey=${OMDB_API_KEY}`;
    const oddbapiRes = await fetch(oddbapiUrl);
    const oddbapiData = await oddbapiRes.json();

    for (let index = 0; index < oddbapiData.Search.length; index++) {
      const imdbUrl = `https://www.omdbapi.com/?i=${oddbapiData.Search[index].imdbID}&apikey=${OMDB_API_KEY}`;
      const imdbRes = await fetch(imdbUrl);
      const imdbData = await imdbRes.json();
      oddbapiData.Search[index].rating = imdbData.imdbRating;
    }

    return oddbapiData;
  }
}
