import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './todo-card'

@customElement('card-renderer')
export class CardRenderer extends LitElement {
  @property({ type: Array })
  ids = [1, 2, 3, 4, 5]

  static styles = css`
    .todo-cards {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
  `

  render() {
    return html`
      <div class="todo-cards">
        ${this.ids.map(id => html`
          <todo-card .todoId=${id}></todo-card>`
        )}
      </div>
    `
  }
}