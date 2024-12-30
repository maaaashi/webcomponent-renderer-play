import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './todo-list'
import { fetchTodoIds } from "./todos";

@customElement('list-renderer')
export class ListRenderer extends LitElement {
  @property({ type: Array })
  ids = [] as number[]

  constructor() {
    super()

    fetchTodoIds()
      .then(todos => {
        this.ids = [...todos.wipIds, ...todos.completedIds]
      })
  }

  render() {
    return html`
      ${this.ids.map(id => html`
        <todo-list .todoId=${id}></todo-list>`
      )}
    `
  }
}