import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import './my-todos'
import './card-renderer'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-app')
export class MyElement extends LitElement {
  render() {
    return html`
      <div>
        <my-todos>
          <card-renderer></card-renderer>
        </my-todos>
        <my-todos>
          <list-renderer></list-renderer>
        </my-todos>
      </div>
    `
  }

  static styles = css`
  `
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-element': MyElement
//   }
// }
