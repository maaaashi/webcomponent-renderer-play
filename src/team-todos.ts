import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { fetchTeamTodoIds } from './todos'

@customElement('team-todos')
export class TeamTodos extends LitElement {
  @property({ type: Array })
  ids = []

  constructor() {
    super()

    fetchTeamTodoIds().then((data) => {
      const event = new CustomEvent('todo-fetched', {
        detail: {
          ids: data.ids,
        },
      })

      this.dispatchEvent(event)
    })
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `
  }
}
