import { css, html, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { TodoResponseJson } from './types'

@customElement('todo-card')
export class TodoCard extends LitElement {
  @property({ type: Number })
  todoId = 0

  @property({ type: String })
  todo = ''

  @property({ type: Boolean })
  completed = false

  @state()
  private _imageSrc = ''

  @state()
  private _imageAlt = ''

  async updated(changedProperties: { has: (arg: string) => any }) {
    if (changedProperties.has('todoId')) {
      const response = await fetch(`https://dummyjson.com/todos/${this.todoId}`)
      const json = (await response.json()) as TodoResponseJson

      this.todo = json.todo

      if (this.todoId === 4 || this.todoId === 97) {
        this._imageSrc = '../public/watch.png'
        this._imageAlt = 'watch'
      } else if (this.todoId === 80) {
        this._imageSrc = '../public/bake.png'
        this._imageAlt = 'bake'
      } else if (this.todoId === 195) {
        this._imageSrc = '../public/visit.png'
        this._imageAlt = 'visit'
      } else {
        this._imageSrc = '../public/phone.png'
        this._imageAlt = 'phone'
      }
    }
  }

  static styles = css`
    .todo-card {
      border: 1px solid;
      border-radius: 5px;
      width: 200px;
    }

    .todo-header {
      display: flex;
      justify-content: center;
    }

    .todo-image {
      height: 100px;
    }

    .todo-body {
      padding: 10px;
      border-top: 1px solid;
    }
  `

  render() {
    return html` <div class="todo-card">
      <div class="todo-header">
        <img src=${this._imageSrc} alt=${this._imageAlt} class="todo-image" />
      </div>
      <div class="todo-body">${this.todo}</div>
    </div>`
  }
}
