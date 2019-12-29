import { start, registerHtml, useObservable } from 'tram-one'
const html = registerHtml()

const home = () => {
	const [count, updateCount] = useObservable(0)
	const incrementCount = () => updateCount(count + 1)
	return html`
    <button onclick=${incrementCount}>
      ${count}
    </button>
  `
}

start('#app', home)
