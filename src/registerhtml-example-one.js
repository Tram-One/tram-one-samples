import { start, registerHtml } from 'tram-one'

const html = registerHtml()

const home = () => {
	return html`<h1>Tram-One</h1>`
}

start('#app', home)
