import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('my-todos')
export class MyTodos extends LitElement {
  @property({ type: Array })
  ids = [0, 1, 2]

  render() {
    return html`
      <div>
        <slot .ids=${this.ids}></slot>
      </div>
    `;
  }
}