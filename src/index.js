import 'swiper/css/swiper.min.css';
import 'swiper/js/swiper';

import './styles.scss';
import AppHtml from './App.html';
import { Main } from './models/main/main';

class App {
  constructor(html) {
    document.body.innerHTML = html;
    this.buildApp();
  }
  async buildApp() {
    const main = new Main(document.body.querySelector('main'));
  }
}

new App(AppHtml);
