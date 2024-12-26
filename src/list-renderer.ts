import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './todo-list'

@customElement('list-renderer')
export class ListRenderer extends LitElement {
  @property({ type: Array })
  ids = []

  render() {
    return html`
      ${this.ids.map(id => html`
        <todo-list .id=${id}></todo-list>`
      )}
    `
  }
}