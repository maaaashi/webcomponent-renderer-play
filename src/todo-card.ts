import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('todo-card')
export class TodoCard extends LitElement {
  @property({ type: Number })
  ids = 0

  render() {
    return html`
      <div>
        ${this.id}
      </div>
    `
  }
}