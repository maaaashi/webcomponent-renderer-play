import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fetchTodoIds } from "./todos";

@customElement('my-todos')
export class MyTodos extends LitElement {
  @property({ type: Array })
  ids = []

  constructor() {
    super()

    fetchTodoIds()
      .then(data => {
        const event = new CustomEvent('todo-fetched', {
          detail: {
            ids: data.ids
          }
        })

        this.dispatchEvent(event)
      })

  }

  render() {
    return html`
      <div>
        <slot .ids=${this.ids}></slot>
      </div>
    `;
  }
}