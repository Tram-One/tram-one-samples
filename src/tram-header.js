import { registerHtml } from 'tram-one'
const html = registerHtml()

export default (props, children) => {
  const titleStyle = `color: ${props.color}`
  return html`
    <h1 style=${titleStyle}>${children}</h1>
  `
}
