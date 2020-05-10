import './movie-list.scss';
import star from '@/assets/star.png';
import Swiper from 'swiper';
import SpinnerHtml from '../spinner.html';

export class MovieList {
  constructor(rootNode, moviesData) {
    this.rootNode = rootNode;
    this.moviesData = moviesData;
    this.movies = [];
    this.moviesTotalResults = moviesData.totalResults;
    this.swiper = null;
    this.buildSwiper();
    this.getMoreMovies = () => {};
    this.isFetchMovies = false;
  }

  buildSwiper() {
    const self = this;

    const swiper = this.getSwiperHtml();
    this.rootNode.append(swiper);
    this.swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      // Optional parameters
      direction: 'horizontal',
      keyboard: {
        enabled: true,
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    this.appendSwiperSlides(this.moviesData.Search);

    this.swiper.on('reachEnd', function () {
      if (!self.isFetchMovies && self.moviesTotalResults > self.movies.length) {
        self.isFetchMovies = true;
        self.appendSpinnerSlide();
        self.getMoreMovies();
      }
    });
  }

  getSwiperHtml() {
    const container = document.createElement('div');
    container.classList.add('swiper-container');

    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-wrapper');
    container.append(wrapper);

    const pagination = document.createElement('div');
    pagination.classList.add('swiper-pagination');
    container.append(pagination);

    const buttonPrev = document.createElement('div');
    buttonPrev.classList.add('swiper-button-prev');
    container.append(buttonPrev);

    const buttonNext = document.createElement('div');
    buttonNext.classList.add('swiper-button-next');
    container.append(buttonNext);

    return container;
  }

  appendSpinnerSlide() {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = SpinnerHtml;
    this.swiper.appendSlide(slide);
  }

  addNewSlides(movies) {
    this.swiper.removeSlide(this.movies.length);
    this.appendSwiperSlides(movies);
    this.isFetchMovies = false;
  }

  appendSwiperSlides(movies) {
    this.movies = [...this.movies, ...movies];
    const slides = [];

    movies.forEach((item) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.append(this.getMovieNode(item));
      slides.push(slide);
    });

    this.swiper.appendSlide(slides);
  }

  getMovieNode(movieData) {
    const movie = document.createElement('div');
    movie.classList.add('swiper-movie');

    const titleLink = document.createElement('a');
    titleLink.textContent = movieData.Title;
    titleLink.href = `https://www.imdb.com/title/${movieData.imdbID}`;
    movie.append(titleLink);

    const img = document.createElement('img');
    img.alt = `The movie titled: ${movieData.Title}`;
    img.src = movieData.Poster;
    movie.append(img);

    const year = document.createElement('p');
    year.textContent = movieData.Year;
    movie.append(year);

    const ratingBlock = document.createElement('div');
    ratingBlock.classList.add('rating');

    const imgRating = document.createElement('img');
    imgRating.classList.add('star');
    imgRating.src = star;
    ratingBlock.append(imgRating);

    const rating = document.createElement('p');
    rating.textContent = movieData.rating;
    ratingBlock.append(rating);

    movie.append(ratingBlock);
    return movie;
  }
}
