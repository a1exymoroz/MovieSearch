import './list.scss';
import star from '@/assets/star.png';
import Swiper from 'swiper';

export class List {
  constructor(rootNode, movies) {
    this.rootNode = rootNode;
    this.movies = movies;
    this.buildSwiper();
  }

  buildSwiper() {
    const swiper = this.getSwiperHtml();
    this.rootNode.append(swiper);
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  getSwiperHtml() {
    const container = document.createElement('div');
    container.classList.add('swiper-container');

    const wrapper = document.createElement('div');
    wrapper.classList.add('swiper-wrapper');
    container.append(wrapper);

    this.buildSwiperSlide(wrapper);

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

  buildSwiperSlide(wrapper) {
    const wrapperSlides = [];
    this.movies.Search.forEach((item, index) => {});

    //   const slide = document.createElement('div');
    //   slide.classList.add('swiper-slide');
    //   slide.append(this.getMovieNode(item));
    //   wrapper.append(slide);
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
