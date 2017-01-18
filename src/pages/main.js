const html = require('choo/html');
const optionsElement = require('../elements/options');
const inputElement = require('../elements/input');
const outputElement = require('../elements/output');

const noop = ()=> {};

const optionsStyle = `
  margin: 2em;
`

module.exports = (state, prev, send) => {
  const options = optionsElement.bind(this, state, prev, send);
  const input = inputElement.bind(this, state, prev, send);
  const output = state.output ? outputElement.bind(this, state, prev, send) : noop;

  const encrypt = () => {
    send('encrypt', {key: '', message: ''})
  }

  return html`
  <div>
    <div style=${optionsStyle}>
      ${options()}
      ${input()}
      ${output()}
    </div>
  </div>`
}
