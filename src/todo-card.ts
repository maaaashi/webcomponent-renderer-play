import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

interface TodoResponseJson {
  id: number,
  todo: string,
  completed: boolean,
  userId: number
}

@customElement('todo-card')
export class TodoCard extends LitElement {
  @property({ type: Number })
  todoId = 0

  @property({ type: String })
  todo = ""
  
  @property({ type: Boolean })
  completed = false

  async updated(changedProperties: { has: (arg: string) => any; }) {
    if (changedProperties.has('todoId')) {
      const response = await fetch(`https://dummyjson.com/todos/${this.todoId}`)
      const json = await response.json() as TodoResponseJson

      this.todo = json.todo
    }
  }

  static styles = css`
    .todo-card {
      border: 1px solid;
      border-radius: 5px;
      padding: 10px;
    }
  `

  render() {
    return html`
      <div class="todo-card">
        <input type="checkbox" .checked=${this.completed} />
        ${this.todo}
      </div>
    `
  }
}