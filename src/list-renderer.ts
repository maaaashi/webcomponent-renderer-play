import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './todo-list'

@customElement('list-renderer')
export class ListRenderer extends LitElement {
  @property({ type: Array })
  ids = [1, 2, 3, 4, 5]

  render() {
    return html`
      ${this.ids.map(id => html`
        <todo-list .todoId=${id}></todo-list>`
      )}
    `
  }
}