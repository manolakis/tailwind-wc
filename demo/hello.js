import { html, css, LitElement } from 'lit-element';

import float from '../src/float.css.js';
import clear from '../src/clear.css.js';

const mapper = rule => css([rule.toString()]);

export class SimpleGreeting extends LitElement {
  static get styles() {
    return [
      float({ mapper }),
      clear({ mapper }),
      css`
        p {
          color: blue;
        }
      `,
    ];
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p class="float-right clear-right">Hello, ${this.name}!</p>`;
  }
}

customElements.define('simple-greeting', SimpleGreeting);
