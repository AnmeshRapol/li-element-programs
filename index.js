import { LitElement, html } from 'lit-element';

class MyElement extends LitElement {
  render() {
    return html`<h1>polymer is great...<h1>`;
  }
}
customElements.define('my-element', MyElement);
