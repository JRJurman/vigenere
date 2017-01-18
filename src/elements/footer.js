const html = require('choo/html');

const footerStyle = `
  text-align: center;
  color: white;
  background: #454545;
  padding: 0.25em;
  position: fixed;
  bottom: 0;
  width: 100%
`

module.exports = (state, prev, send) => {
  return html`
  <footer style=${footerStyle}>
    <h5>Made By Tina and Jesse</h5>
  </footer>`
}
