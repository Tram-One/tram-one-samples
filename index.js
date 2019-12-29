import { start, registerSvg } from 'tram-one'

const svg = registerSvg()

const home = () => svg`
  <svg>
    <g>
      <circle fill="#ce1271" cx="100" cy="100" r="20"/>
    </g>
  </svg>
`

start('#app', home)
