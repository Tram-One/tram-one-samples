import { start, registerHtml, useUrlParams } from 'tram-one'

const html = registerHtml()

const home = () => {
	if (useUrlParams('/home')) return html`<h1>Home Page</h1>`
	if (useUrlParams('/details')) return html`<h1>Details Page</h1>`
	return html`
    <div>
      <h1>No Page</h1>
      <div><a href="/home">Home Page</a></div>
      <div><a href="/Details">Details Page</a></div>
    </div>
  `
}

start('#app', home)
