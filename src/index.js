import 'swiper/css/swiper.min.css';
import 'swiper/js/swiper';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

import './styles.scss';

import AppHtml from './App.html';
import { Main } from './models/main/main';

class App {
  constructor(html) {
    document.body.innerHTML = html;
    this.buildApp();
  }
  buildApp() {
    new Main(document.body.querySelector('main'));
  }
}

new App(AppHtml);
