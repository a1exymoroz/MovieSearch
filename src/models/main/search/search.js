import './search.scss';
import searchHtml from './search.html';

export class Search {
  constructor(rootNode) {
    this.rootNode = rootNode;
    this.inputNode = null;
    this.buildSearch();
    this.searchSubmit = () => {};
  }
  buildSearch() {
    this.rootNode.innerHTML = searchHtml;

    this.inputNode = this.rootNode.querySelector('input');
    this.rootNode.querySelector('form').addEventListener('submit', (event) => this.onSubmit(event));
    this.rootNode
      .querySelector('.clear')
      .addEventListener('click', (event) => this.onClearInput(event));
  }

  onClearInput(event) {
    event.stopPropagation();
    this.inputNode.value = '';
  }

  onSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.movie.value;
    if (!value) return;
    this.searchSubmit(value);
    this.inputNode.value = '';
  }
}

//TODO: set thorttle
// const throttle = (func, ms) => {
//   let isThrottled = false,
//     savedArgs,
//     savedThis;

//   function wrapper() {
//     if (isThrottled) {
//       // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments); // (1)

//     isThrottled = true;

//     setTimeout(function () {
//       isThrottled = false; // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }

//   return wrapper;
// };
