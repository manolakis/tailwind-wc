import { html, css, LitElement } from 'lit-element';

import { css4wc } from '../packages/core/src/css4wc.js';

const mapper = rule => css([rule.toString()]);

export class SimpleGreeting extends LitElement {
  static get styles() {
    return [
      css4wc(mapper)('float', 'clear'),
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
