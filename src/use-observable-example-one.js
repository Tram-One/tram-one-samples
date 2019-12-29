import { start, registerHtml, useObservable } from 'tram-one'

const html = registerHtml()

const home = () => {
	const [count, setCount] = useObservable(0)
	const increment = () => setCount(count + 1)
	return html`
    <button onclick=${increment}>${count}</button>
  `
}

start('#app', home)
