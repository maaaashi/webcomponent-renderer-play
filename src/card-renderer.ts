import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './todo-card'
import { TodoResponseJson } from "./types";
import { groupTodosByStatus } from "./todos";

@customElement('card-renderer')
export class CardRenderer extends LitElement {
  @property({ type: Array })
  ids = []

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

  async updated(changedProperties: { has: (arg: string) => any; }) {
    if (changedProperties.has('ids')) {
      this.wipIds = []
      this.completedIds = []

      groupTodosByStatus(this.ids)
        .then(data => {
          this.wipIds = data.wipIds
          this.completedIds = data.completedIds
        })
    }
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