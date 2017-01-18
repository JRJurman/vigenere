const html = require('choo/html');

const headerElement = require('../elements/header');
const footerElement = require('../elements/footer');
const noop = ()=>{};

module.exports = (pageElement, state, prev, send) => {
  const header = headerElement.bind(this, state, prev, send);
  const footer = footerElement.bind(this, state, prev, send);
  const page = pageElement ? pageElement.bind(this, state, prev, send) : noop;

  return html`
  <div>
    ${header()}
    ${page()}
    ${footer()}
  </div>`
}
