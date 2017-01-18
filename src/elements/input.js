const html = require('choo/html');

const inputStyle = `
  font-family: monospace;
`

module.exports = (state, prev, send) => {

  const onUpdateInput = (event) => {
    send('updateInput', event.target.value);
  }

  return html`
  <div class="form-group">
    <textarea class="form-control"
              style=${inputStyle}
              onkeyup=${onUpdateInput}
              rows="3"
              placeholder="Message to Encrypt or Decrypt">${state.input}</textarea>
  </div>
  `
}
