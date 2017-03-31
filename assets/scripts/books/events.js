'use strict'

const booksApi = require('./api.js')
const booksUi = require('./ui.js')
// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked

const onGetBooks = function (event) {
  event.preventDefault()
  console.log('You clicked the books button')
  booksApi.index()
    // does something
    // then, we have a method chain
    // these are UI concerns
  .then(booksUi.onSuccess)
  .catch(booksUi.onFailure)
}

// Export this object
module.exports = {
  onGetBooks: onGetBooks
}
