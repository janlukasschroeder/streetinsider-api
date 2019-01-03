require('dotenv').config();
const WebSocket = require('ws');
const EventEmitter = require('events');
const webSocketServerUrl = 'wss://cast.streetinsider.com:10443/cast/';

class StreetInsiderApi extends EventEmitter {
  constructor({ token } = {}) {
    super();

    this.token = token;

    this.onOpen = this.onOpen.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.onError = this.onError.bind(this);
  }

  onOpen() {
    const options = {
      _req: 'auth',
      token: this.token,
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

  onError(error) {
    this.emit('error', error);
  }

  init(token) {
    this.token = process.env.TOKEN || token;
    this.ws = new WebSocket(webSocketServerUrl);
    this.ws.on('open', this.onOpen);
    this.ws.on('message', this.onMessage);
    this.ws.on('error', this.onError);
  }
}

module.exports = new StreetInsiderApi();
