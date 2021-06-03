import { html, css, LitElement } from 'lit';

import { tw } from '../index.js';

export class SimpleGreeting extends LitElement {
  static get styles() {
    return [
      tw('float', 'clear'),
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
