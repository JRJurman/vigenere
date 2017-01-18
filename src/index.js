const choo = require('choo');
const html = require('choo/html');
const app = choo();

const chrome = require('./pages/chrome');
const main = require('./pages/main');
const state = require('./models/state');

app.model(state);

app.router([
  ['/', chrome.bind(this, main)],
]);

const tree = app.start();
document.body.appendChild(tree);
