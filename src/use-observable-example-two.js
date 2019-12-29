import { start, registerHtml, useObservable } from 'tram-one'

const html = registerHtml()

const home = () => {
	const [counter] = useObservable({ count: 0 })
	const increment = () => { counter.count += 1 }
	return html`
    <button onclick=${increment}>${counter.count}</button>
  `
}

start('#app', home)
