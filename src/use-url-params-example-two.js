import { start, registerHtml, useUrlParams } from 'tram-one'

const url = window.location.hostname
const html = registerHtml()

const home = () => {
	const { size } = useUrlParams('/:size')
	const pageStyle = `font-size: ${size}em;`
	return html`
    <div style=${pageStyle}>
      <div>Tram-One hooks are neat!</div>
      <div><a href="/1">${url}/1</a></div>
      <div><a href="/2">${url}/2</a></div>
      <div><a href="/3">${url}/3</a></div>
    </div>
  `
}

start('#app', home)
