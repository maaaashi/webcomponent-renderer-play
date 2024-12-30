import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import './todo-card'
import { TodoResponseJson } from "./types";

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

  async fetchTodos() {
    const res = await fetch('https://dummyjson.com/todos/random/5')
    const json = await res.json() as TodoResponseJson[]
    json.map(todo => {
      if (todo.completed) {
        this.completedIds = [...this.completedIds, todo.id]
      } else {
        this.wipIds = [...this.wipIds, todo.id]
      }
    })
  }

  constructor() {
    super()

    this.fetchTodos()
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