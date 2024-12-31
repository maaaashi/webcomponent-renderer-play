import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './todo-list'

@customElement('list-renderer')
export class ListRenderer extends LitElement {
  @property({ type: Array })
  ids = [] as number[]

  render() {
    return html`
      ${this.ids.map((id) => html` <todo-list .todoId=${id}></todo-list>`)}
    `
  }
}
