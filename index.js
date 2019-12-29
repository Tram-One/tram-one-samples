import { start, registerHtml, useGlobalObservable } from 'tram-one'
import valueDisplay from './value-display'

const html = registerHtml({
	'value-display': valueDisplay
})

const home = () => {
	const [count, setCount] = useGlobalObservable('global-count', 0)
	const increment = () => setCount(count + 1)
	return html`
    <div>
      <button onclick=${increment}>Increment</button>
      <value-display />
    </div>
  `
}

start('#app', home)
