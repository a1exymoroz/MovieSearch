import './search.scss';
import searchHtml from './search.html';

const throttle = (func, ms) => {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
};

export class Search {
  constructor(rootNode) {
    this.rootNode = rootNode;
    this.buildSearch();
    this.searchSubmit = () => {};
  }
  buildSearch() {
    const search = document.createElement('div');
    this.rootNode.append(search);
    search.innerHTML = searchHtml;

    search.querySelector('form').addEventListener('submit', (event) => this.onSubmit(event));
  }

  onSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.movie.value;
    console.log(value);
    this.searchSubmit(value);
  }
}
