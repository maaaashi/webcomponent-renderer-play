import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './my-todos'
import './card-renderer'
import './list-renderer'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-app')
export class MyElement extends LitElement {
  @property({ type: Array })
  ids = []

  handleTodoFetched(event: CustomEvent) {
    this.ids = event.detail.ids
  }

  render() {
    return html`
      <div>
        card タイプ
        <my-todos @todo-fetched=${this.handleTodoFetched}>
          <card-renderer .ids=${this.ids}></card-renderer>
        </my-todos>
        list タイプ
        <my-todos @todo-fetched=${this.handleTodoFetched}>
          <list-renderer .ids=${this.ids}></list-renderer>
        </my-todos>
      </div>
    `
  }

  static styles = css``
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-element': MyElement
//   }
// }
