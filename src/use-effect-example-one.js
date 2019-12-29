import { start, registerHtml, useEffect } from 'tram-one'

const html = registerHtml()

const home = () => {
	useEffect(() => {
		console.log('App Mounted')
	})
	return html`<h1>Tram-One</h1>`
}

start('#app', home)
