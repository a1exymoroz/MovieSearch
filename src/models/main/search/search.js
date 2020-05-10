import './search.scss';
import searchHtml from './search.html';
import { VirtualKeyboard } from './virtual-keyboard/virtual-keyboard';

export class Search {
  constructor(rootNode) {
    this.rootNode = rootNode;
    this.inputNode = null;
    this.isKeyboardOpen = false;
    this.isSpeakActive = false;
    this.buildSearch();
    this.recognition = null;
    this.initRecognition();
    this.searchSubmit = () => {};
  }
  buildSearch() {
    this.rootNode.innerHTML = searchHtml;

    this.inputNode = this.rootNode.querySelector('input');

    this.rootNode.querySelector('form').addEventListener('submit', (event) => this.onSubmit(event));
    this.rootNode
      .querySelector('.search__keyboard')
      .addEventListener('click', (event) => this.onClickKeyboard(event));
    this.rootNode
      .querySelector('.search__speak')
      .addEventListener('click', (event) => this.onClickSpeak(event));
  }

  initRecognition() {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = true;

    this.recognition.onresult = (event) => {
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        if (event.results[i].isFinal) {
          console.log(event.results[i][0].transcript.trim());
          this.inputNode.value = event.results[i][0].transcript.trim();
        }
      }
    };
    this.recognition.stop();
  }

  onSubmit(event) {
    event.preventDefault();
    const value = event.target.elements.movie.value;
    if (!value) return;
    this.searchSubmit(value);
  }

  onClickKeyboard(event) {
    event.stopPropagation();
    if (this.isKeyboardOpen) return;
    this.inputNode.setAttribute('disabled', 'true');
    this.isKeyboardOpen = true;

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper__virtual-keyboard');
    const close = document.createElement('button');
    close.innerHTML = '<i class="fas fa-times"></i>';
    close.classList.add('wrapper__virtual-close');

    wrapper.append(close);

    let virtualKeyboard = new VirtualKeyboard(wrapper, this.inputNode.value);
    document.body.append(wrapper);

    let isRemoveKeyBoard = false;
    virtualKeyboard.onChangeValue = (value) => {
      if (!isRemoveKeyBoard) {
        this.inputNode.value = value;
      }
    };

    virtualKeyboard.onClickEnter = () => {
      this.searchSubmit(this.inputNode.value);
    };

    close.addEventListener('click', (event) => {
      event.stopPropagation();
      this.isKeyboardOpen = false;
      this.inputNode.removeAttribute('disabled');

      wrapper.remove();
      isRemoveKeyBoard = true;

      //TODO: remove listener doesn't word
      // virtualKeyboard.removeDocumentListeners();
      // virtualKeyboard = null;
      // const el = wrapper;
      // const elClone = el.cloneNode(true);

      // el.parentNode.replaceChild(elClone, el);
    });
  }

  onClickSpeak(event) {
    event.stopPropagation();
    this.isSpeakActive = !this.isSpeakActive;

    event.target.classList.toggle('active');
    if (this.isSpeakActive) {
      this.recognition.start();
      this.inputNode.setAttribute('disabled', 'true');
    } else {
      this.recognition.stop();
      this.inputNode.removeAttribute('disabled');
    }
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
