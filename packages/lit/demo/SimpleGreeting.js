import { html, css, LitElement } from 'lit';

import { tw } from '../index.js';

export class SimpleGreeting extends LitElement {
  static get styles() {
    return [
      tw('float', 'clear', 'background-image', 'gradient-color-stops'),
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
    return html`<p
      class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 float-right clear-right"
    >
      Hello, ${this.name}!
    </p>`;
  }
}

customElements.define('simple-greeting', SimpleGreeting);
