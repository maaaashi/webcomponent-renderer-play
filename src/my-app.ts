import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './my-todos'
import './team-todos'
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

  @property({ type: Array })
  teamIds = []

  handleTodoFetched(event: CustomEvent) {
    this.ids = event.detail.ids
  }

  handleTeamTodoFetched(event: CustomEvent) {
    this.teamIds = event.detail.ids
  }

  render() {
    return html`
      <div>
        <h2>カードタイプ</h2>
        <pre>
          ${`<my-todos>
            <card-renderer ids=[]></card-renderer>
          </my-todos>`}</pre
        >
        <my-todos @todo-fetched=${this.handleTodoFetched}>
          <card-renderer .ids=${this.ids}></card-renderer>
        </my-todos>

        <h2>リストタイプ</h2>
        <pre>
          ${`<my-todos>
            <list-renderer ids=[]></list-renderer>
          </my-todos>`}</pre
        >
        <my-todos @todo-fetched=${this.handleTodoFetched}>
          <list-renderer .ids=${this.ids}></list-renderer>
        </my-todos>

        <h2>チームのTodo</h2>
        <pre>
          ${`<team-todos>
            <list-renderer ids=[]></list-renderer>
          </team-todos>`}</pre
        >
        <team-todos @todo-fetched=${this.handleTeamTodoFetched}>
          <list-renderer .ids=${this.teamIds}></list-renderer>
        </team-todos>
      </div>
    `
  }

  static styles = css`
    pre {
      background-color: #f4f4f4;
      padding: 10px;
    }
  `
}
