import { registerHtml, useGlobalObservable } from "tram-one"

const html = registerHtml()

export default () => {
  const [count] = useGlobalObservable('global-count')
  return html`<div>${count}</div>`
}
