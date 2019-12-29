import { start, registerHtml } from 'tram-one'

const html = registerHtml()

const home = () => html`
  <h1>Tram-One</h1>
`

const testDiv = document.createElement('div')
start(testDiv, home)
console.log(testDiv.outerHTML)
