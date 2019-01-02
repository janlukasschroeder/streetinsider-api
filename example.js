const api = require('./index');

api.init('YOUR TOKEN');

api.on('news', function handleNews(news) {
  console.log(news);
  // handle newly incoming article
});
