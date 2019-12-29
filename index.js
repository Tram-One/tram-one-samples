import { start, registerHtml } from 'tram-one'
import tramHeader from './tram-header'

const html = registerHtml({
	'tram-header': tramHeader
})

const home = () => {
	return html`
    <tram-header color="blue">
      Tram-One Rules!
    </tram-header>
  `
}

start('#app', home)
