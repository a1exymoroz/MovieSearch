import './main.scss';
import { List } from './list/list';

export class Main {
  constructor(rootNode) {
    this.rootNode = rootNode;
    this.page = 1;
    this.buildMain();
  }

  buildMain() {
    this.buildSearch();
    this.buildList();
  }
  buildSearch() {
    this.searchNode = document.createElement('div');
    this.rootNode.append(this.searchNode);
  }

  async buildList() {
    this.listNode = document.createElement('div');
    this.rootNode.append(this.listNode);
    const movies = await this.getMovies();
    new List(this.listNode, movies);
  }

  async getMovies() {
    const API_KEY = '5a8359a3';
    const url = `https://www.omdbapi.com/?s=${'dream'}&page=${this.page}&apikey=${API_KEY}`;

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
