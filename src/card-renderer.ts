import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './todo-card'
import { TodoResponseJson } from "./types";

@customElement('card-renderer')
export class CardRenderer extends LitElement {
  @property({ type: Array })
  ids = [] as number[]

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
      this.ids.push(todo.id)
    })
  }

  constructor() {
    super()

  }

  render() {
    return html`
      <div class="todos">
        ${this.ids}
        <section>
          <h4>
            WIP
          </h4>
          <div class="todo-cards">
            ${this.ids.filter(id => id % 2 == 0).map(id => html`
              <todo-card .todoId=${id}></todo-card>`
            )}
          </div>
        </section>
        <section>
          <h4>
            COMPLETED
          </h4>
          <div class="todo-cards">
            ${this.ids.filter(id => id % 2 != 0).map(id => html`
              <todo-card .todoId=${id}></todo-card>`
            )}
          </div>
        </section>
      </div>
    `
  }
}