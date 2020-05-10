import 'jsdom-global/register';
import 'swiper/js/swiper';
import '@fortawesome/fontawesome-free/js/all.min.js';

import assert from 'assert';
import { Main } from '../src/models/main/main';

describe('mocha tests', () => {
  // const currentMain = new Main(document.body.querySelector('main'));
  it('concatenateStrings should return concatenation of two strings', () => {
    assert.equal(2, 1 + 1);
  });
});
