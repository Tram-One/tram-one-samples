import { registerHtml, start } from 'tram-one'

const html = registerHtml()

const home = () => {
	return html`
    <div>
      <h1>Tram One</h1>
      <h2>A Modern View Framework</h2>
    </div>
  `
}

start('#app', home)
