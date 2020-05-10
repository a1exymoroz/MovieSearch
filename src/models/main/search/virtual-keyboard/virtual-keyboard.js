import './virtual-keyboard.scss';
import { keyboardLayout } from './keyboard-layout';

export class VirtualKeyboard {
  constructor(rootNode, value) {
    this.rootNode = rootNode;
    this.language = 'eng';
    this.capsLock = false;
    this.keysPressed = {};
    this.value = value;
    this.keyboardNode = null;

    const localStorageLanguage = JSON.parse(localStorage.getItem('virtual-keyboard-lang'));
    this.language = localStorageLanguage || 'eng';
    this.keyboardLayout = keyboardLayout;
    this.initKeyBoard();
    this.initKeyBoardEvents();

    this.onChangeValue = () => {};
    this.onClickEnter = () => {};

    //TODO: remove listener doesn't word
    // this.onKeydown = this.onKeydown.bind(this);
    // this.onKeyup = this.onKeyup.bind(this);
  }

  initKeyBoard() {
    this.keyboardNode = document.createElement('div');
    this.keyboardNode.classList.add('keyboard');
    this.keyboardNode.append(this.createKeyboard());

    this.rootNode.append(this.keyboardNode);
  }

  createKeyboard() {
    const fragment = document.createDocumentFragment();
    this.keyboardLayout.forEach((item, index) => {
      if (item.key === 'Empty') {
        const empty = document.createElement('div');
        empty.classList.add(...item.classes);
        empty.dataset.key = `${item.key}`;
        empty.dataset.index = `${index}`;
        fragment.appendChild(empty);
      } else {
        const keyElement = document.createElement('button');

        // Add attributes/classes
        keyElement.setAttribute('type', 'button');
        keyElement.dataset.index = `${index}`;
        keyElement.dataset.key = `${item.key}`;
        keyElement.classList.add(...item.classes);
        let text = '';
        switch (item.key) {
          case 'Backspace': {
            text = item.text.eng;
            keyElement.textContent = text;

            keyElement.addEventListener('click', (event) => {
              event.stopPropagation();
              this.value = this.value.substring(0, this.value.length - 1);
              this.onChangeValue(this.value);
            });
            break;
          }

          case 'CapsLock': {
            text = item.text.eng;
            keyElement.addEventListener('click', (event) => {
              event.stopPropagation();
              this.toggleCapsLock();
            });

            break;
          }
          case 'Space': {
            text = item.text.eng;
            keyElement.addEventListener('click', (event) => {
              event.stopPropagation();
              this.value += text;
              this.onChangeValue(this.value);
            });

            break;
          }
          case 'Enter': {
            text = item.text.eng;
            keyElement.addEventListener('click', (event) => {
              event.stopPropagation();
              this.onClickEnter();
            });

            break;
          }
          case 'ArrowLeft':
          case 'ArrowDown':
          case 'ArrowRight':
          case 'ArrowUp': {
            text = item.text.eng;
            break;
          }
          case 'ControlLeft':
          case 'ControlRight':
          case 'MetaLeft':
          case 'AltLeft':
          case 'AltRight':
          case 'ShiftRight':
          case 'ShiftLeft': {
            text = item.text.eng;
            break;
          }

          default: {
            text = this.capsLock ? item.shift[this.language] : item.text[this.language];

            keyElement.addEventListener('click', (event) => {
              event.stopPropagation();
              if (this.hasKeyPressed(/Shift/)) {
                this.value += !this.capsLock ? item.shift[this.language] : item.text[this.language];
              } else {
                this.value += event.currentTarget.textContent;
              }

              this.onChangeValue(this.value);
            });

            break;
          }
        }
        keyElement.innerHTML = text;
        fragment.appendChild(keyElement);
      }
    });

    return fragment;
  }

  toggleCapsLock() {
    this.capsLock = !this.capsLock;
    this.rewriteKeyboardContentText();
  }

  rewriteKeyboardContentText() {
    this.keyboardNode.childNodes.forEach((element) => {
      const dataKey = element.dataset.key;
      if (!['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Empty'].includes(dataKey)) {
        const keyboardLayoutItem = this.keyboardLayout[+element.dataset.index];

        if (/Digit/.test(dataKey) || dataKey === 'Minus' || dataKey === 'Equal') {
          element.textContent = keyboardLayoutItem.text.eng;
        } else {
          element.textContent = this.capsLock
            ? keyboardLayoutItem.shift[this.language]
            : keyboardLayoutItem.text[this.language];
        }
      }
    });
  }

  initKeyBoardEvents() {
    document.addEventListener('keydown', (event) => this.onKeydown(event));
    document.addEventListener('keyup', (event) => this.onKeyup(event));
  }

  onKeydown(event) {
    event.stopPropagation();
    if (this.keysPressed[event.code]) return;

    this.keysPressed[event.code] = this.keyboardNode.querySelector(`[data-key=${event.code}]`);

    if (!this.keysPressed[event.code]) return;

    this.keysPressed[event.code].classList.add('keyboard__key_active');

    this.keysPressed[event.code].click();
  }

  onKeyup(event) {
    event.stopPropagation();
    const node = this.keysPressed[event.code];
    if (!node) return;
    node.classList.remove('keyboard__key_active');

    if (this.hasKeyPressed(/Shift/) && this.hasKeyPressed(/Alt/)) {
      this.toggleLanguage();
    }
    delete this.keysPressed[event.code];
  }

  //TODO: remove listener doesn't word
  removeDocumentListeners() {
    // document.removeEventListener('keydown', this.onKeydown);
    // document.removeEventListener('keyup', this.onKeyup);
  }

  toggleLanguage() {
    const language = this.language === 'eng' ? 'ru' : 'eng';
    localStorage.setItem('virtual-keyboard-lang', JSON.stringify(language));
    this.language = language;
    this.rewriteKeyboardContentText();
  }

  hasKeyPressed(regexp) {
    return Object.keys(this.keysPressed).some((element) => regexp.test(element));
  }

  keyPressedLength() {
    return Object.keys(this.keysPressed).length;
  }
}
