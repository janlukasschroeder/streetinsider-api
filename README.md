# streetinsider.com Real-Time News API

- streetinsider.com real-time news API
- Supports client-side (React, Angular, Vue, etc.), and server-side
  (Node.js, Next, etc.) JavaScript

# Getting Started

- `npm install streetinsider-api`

# Example

```js
const api = require('streetinsider-api');

api.init('YOUR_TOKEN'); // set your API token

api.on('news', function handleNews(news) {
  console.log(news); // news is a JSON object
  console.log(news.headline); // print headline
  // handle newly incoming article
});
```

## Example News

```js
{
  distributor: 'GW2',
  id: 14963798,
  datePublished: '2019-01-02 09:43:02',
  headline: 'OraSure Technologies, Inc.:Â Updated Release to Clarify Timing of Presentation',
  categories: [ 'Press Releases' ],
  symbols: [ 'OSUR' ],
  link: 'https://www.streetinsider.com/Press+Releases/OraSure+Technologies,+Inc.:Â%C2%A0Updated+Release+to+Clarify+Timing+of+Presentation/14963798.html',
  markets: [ 'NQ' ],
  entities: [ 80 ],
  important: false
}
```

# Documentation

## .init(token)

Initialises the API with your API token.

- `token` (string) - represents your API token

## .on(message, callback)

Event listener listening for newly incoming news. Calls the callback
function as soon as a new article arrived.

- `message` (string) - always set to `news`
- `callback` (function) - used to handle a newly incoming article.

### Article Attributes

- `distributor` (string, optional) - abbreviation of the article distributor, e.g. `PN`, or `BW`
- `id` (int, optional) - unique article id, e.g. `14963826`. Is not always set.
- `datePublished` (string) - publication date and time, e.g. `2019-01-02 09:56:20`
- `headline` (string) - headline of the article, e.g. `'Excelitas Technologies Completes Acquisition of Axsun Technologies`
- `body` (string, optional) - article body (can be HTML), e.g. `<p>Baird analyst Mark Altschwager lowered the ...`
- `categories` (array) - an array of article categories, e.g. `[ 'Press Releases' ]`
- `symbols` (array) - array of tickers the article relates to, e.g. `[ 'JHML', 'JHSC' ]`
- `link` (string) - article link, e.g. https://www.streetinsider.com/Press+Releases/SME+Education+Foundation+Names+Rob+Luce+Vice+President/14963849.html
- `markets` (array) - array of markets the article relates to, e.g. `[ 'NY' ]`
