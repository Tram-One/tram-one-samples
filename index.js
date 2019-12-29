import { start, registerHtml, useUrlParams } from 'tram-one'

const html = registerHtml()

const home = () => {
	const { size } = useUrlParams('/:size')
	const pageStyle = `font-size: ${size}em;`
	return html`
    <div style=${pageStyle}>
      <div>Tram-One hooks are neat!</div>
      <div><a href="/1">1x</a></div>
      <div><a href="/2">2x</a></div>
      <div><a href="/3">3x</a></div>
    </div>
  `
}

start('#app', home)
