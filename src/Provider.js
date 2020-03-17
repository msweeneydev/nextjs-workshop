import React from 'react'

const logo = `
<svg viewBox="0 0 230 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
      <linearGradient x1="114.720775%" y1="181.283245%" x2="39.5399306%" y2="100%" id="linearGradient-1">
          <stop stop-color="#FFFFFF" offset="0%"></stop>
          <stop stop-color="#000000" offset="100%"></stop>
      </linearGradient>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-235.000000, -177.000000)" fill-rule="nonzero">
          <g transform="translate(235.000000, 177.000000)">
              <polygon fill="url(#linearGradient-1)" points="25.49162 0 50.98324 45.226415 0 45.226415"></polygon>
              <path d="M85.75,34 L106.2,34 L106.2,30.45 L90.85,30.45 L105.95,8.9 L105.95,5.8 L86,5.8 L86,9.35 L100.85,9.35 L85.75,30.9 L85.75,34 Z M127.6,34 L145.95,34 L145.95,30.45 L131.75,30.45 L131.75,21.4 L144.1,21.4 L144.1,17.85 L131.75,17.85 L131.75,9.35 L145.95,9.35 L145.95,5.8 L127.6,5.8 L127.6,34 Z M168.05,34 L185.95,34 L185.95,30.45 L179.1,30.45 L179.1,9.35 L185.95,9.35 L185.95,5.8 L168.05,5.8 L168.05,9.35 L174.95,9.35 L174.95,30.45 L168.05,30.45 L168.05,34 Z M215.4,34 L219.55,34 L219.55,9.35 L229.15,9.35 L229.15,5.8 L205.9,5.8 L205.9,9.35 L215.4,9.35 L215.4,34 Z" fill="#333333"></path>
          </g>
      </g>
  </g>
</svg>
`

const Provider = (props) => React.createElement('div', null, [
  props.children,
  React.createElement('div', { style: {
    position: 'absolute',
    left: '20px',
    bottom: '15px',
    width: '120px'
  }, dangerouslySetInnerHTML: { __html: logo }})
])

export default Provider
