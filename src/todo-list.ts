import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('todo-list')
export class TodoList extends LitElement {
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