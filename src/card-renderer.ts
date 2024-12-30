import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './todo-card'
import { fetchTodoIds } from "./todos";

@customElement('card-renderer')
export class CardRenderer extends LitElement {
  @property({ type: Array })
  wipIds = [] as number[]

  @property({ type: Array })
  completedIds = [] as number[]

  static styles = css`
    .todo-cards {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .todos {
      display: flex;
      gap: 20px;
    }
  `

  constructor() {
    super()

    fetchTodoIds()
      .then(todos => {
        this.wipIds = todos.wipIds
        this.completedIds = todos.completedIds
      })
  }

  render() {
    return html`
      <div class="todos">
        <section>
          <h4>
            WIP
          </h4>
          <div class="todo-cards">
            ${this.wipIds.map(id => html`
              <todo-card .todoId=${id}></todo-card>`
            )}
          </div>
        </section>
        <section>
          <h4>
            COMPLETED
          </h4>
          <div class="todo-cards">
            ${this.completedIds.map(id => html`
              <todo-card .todoId=${id}></todo-card>`
            )}
          </div>
        </section>
      </div>
    `
  }
}