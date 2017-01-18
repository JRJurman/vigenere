const html = require('choo/html');

const containerStyle = `
  display: flex;
`

const keyFieldStyle = `
  flex: 1;
  margin-right: 5px;
  font-family: monospace;
`

module.exports = (state, prev, send) => {

  const onUpdateKey = (event) => {
    send('updateKey', event.target.value);
  }

  const onEncrypt = () => {
    send('encrypt');
  }

  const onDecrypt = () => {
    send('decrypt');
  }

  return html`
  <div style=${containerStyle}>
    <div class="form-group" style=${keyFieldStyle}>
      <input  class="form-control"
              onkeyup=${onUpdateKey}
              type="text"
              placeholder="Key">
    </div>
    <div>
      <a href="#" class="btn btn-success" onclick=${onEncrypt}>Encrypt</a>
      <a href="#" class="btn btn-danger" onclick=${onDecrypt}>Decrypt</a>
    </div>
  </div>`
}
