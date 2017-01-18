const html = require('choo/html');

const outputStyle = `
  color: #636363;
  word-break: break-all;
  font-family: monospace;
`

module.exports = (state, prev, send) => {
  return html`
  <div class="well well-sm" style=${outputStyle}>
    ${state.output}
  </div>`
}
