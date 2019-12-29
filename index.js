import { start, registerHtml } from 'tram-one'
import customHeader from './custom-header'

const html = registerHtml({
	'custom-header': customHeader
})

const home = () => html`
  <custom-header />
`

start('#app', home)
