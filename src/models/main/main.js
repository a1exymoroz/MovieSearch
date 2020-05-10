import './main.scss';
import { MovieList } from './movie-list/movie-list';
import { Search } from './search/search';
import Spinner from './spinner.html';

export class Main {
  constructor(rootNode) {
    this.rootNode = rootNode;
    this.movieListNode = null;
    this.infoMessagesNode = null;

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
    this.infoMessagesNode = document.createElement('div');
    this.infoMessagesNode.classList.add('info');
    this.infoMessagesNode.textContent = 'No Result';
    this.searchNode.append(this.infoMessagesNode);
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

    if (this.moviesData) {
      this.setMovieList();
    }
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
    this.infoMessagesNode.innerHTML = '';

    let searchValue = this.searchInputValue;
    if (/[А-Яа-я]/.test(searchValue)) {
      searchValue = await this.getTranslate(searchValue);
    }

    if (!searchValue) return null;

    let data = await this.getOMDBMovies(searchValue);

    if (!data) return null;

    data = await this.setRatingMovies(data);

    if (!data) return null;

    return data;
  }

  getTranslate(value) {
    const TRANSLATE_API_KEY =
      'trnsl.1.1.20170506T133756Z.d523dbf15945aee5.28e6bba8287e893a63b6e59990a007a82116e5e1';

    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${TRANSLATE_API_KEY}&text=${value}&lang=ru-en`;

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.infoMessagesNode.innerHTML = `Showing results for '${value}'`;
        return data.text[0];
      })
      .catch((error) => {
        this.infoMessagesNode.innerHTML = `Error: ${error.message}`;
        return null;
      });
  }

  getOMDBMovies(value) {
    const OMDB_API_KEY = '5a8359a3';

    const url = `https://www.omdbapi.com/?s=${value}&page=${this.page}&apikey=${OMDB_API_KEY}`;

    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let outputData = data;
        if (data.Response === 'False') {
          this.infoMessagesNode.innerHTML = data.Error;
          outputData = null;
        }
        return outputData;
      })
      .catch((error) => {
        this.infoMessagesNode.innerHTML = `Error: ${error.message}`;
        return null;
      });
  }

  setRatingMovies(data) {
    const outputData = data;

    for (let index = 0; index < outputData.Search.length; index++) {
      const imdbData = this.getRatingMovies(outputData.Search[index].imdbID);
      if (!imdbData) return null;
      outputData.Search[index].rating = imdbData.imdbRating;
    }

    return outputData;
  }

  getRatingMovies(value) {
    const OMDB_API_KEY = '5a8359a3';
    const url = `https://www.omdbapi.com/?i=${value}&apikey=${OMDB_API_KEY}`;

    return fetch(url)
      .then((res) => res.json())
      .catch((error) => {
        this.infoMessagesNode.innerHTML = `Error: ${error.message}`;
        return null;
      });
  }
}
