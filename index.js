require('dotenv').config();
const WebSocket = require('ws');
const EventEmitter = require('events');
const webSocketServerUrl = 'wss://cast.streetinsider.com:10443/cast/';

class StreetInsiderApi extends EventEmitter {
  constructor({ token } = {}) {
    super();
    this.ws = new WebSocket(webSocketServerUrl);
    this.token = token;

    this.onOpen = this.onOpen.bind(this);
    this.onMessage = this.onMessage.bind(this);
  }

  onOpen() {
    const options = {
      _req: 'auth',
      token: process.env.TOKEN || this.token,
      _id: Math.random()
    };
    this.ws.send(JSON.stringify(options));
  }

  onMessage(message) {
    const serialisedMessage = JSON.parse(message);
    if (serialisedMessage.article) {
      this.emit('news', serialisedMessage.article);
    }
  }

  init(token) {
    this.token = token;
    this.ws.on('open', this.onOpen);
    this.ws.on('message', this.onMessage);
  }
}

module.exports = new StreetInsiderApi();
