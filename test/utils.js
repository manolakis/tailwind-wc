import { LitElement } from 'lit-element';
import { defineCE, fixture } from '@open-wc/testing';

export const createTestElement = async (styles, template) => {
  const tag = defineCE(
    class TestElement extends LitElement {
      static get styles() {
        return styles;
      }

      render() {
        return template;
      }
    },
  );

  return fixture(`<${tag}></${tag}>`);
};
