import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './todo-card'

@customElement('card-renderer')
export class CardRenderer extends LitElement {
  @property({ type: Array })
  ids = []

  render() {
    return html`
      ${this.ids.map(id => html`
        <todo-card .id=${id}></todo-card>`
      )}
    `
  }
}