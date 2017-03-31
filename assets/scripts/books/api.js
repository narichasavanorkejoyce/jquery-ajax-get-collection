'use strict'

const app = require('../app.js')

const index = function () {
  console.log('booksapi index ran')
  // AJAX takes some methods in the form of an object
  return $.ajax({
    url: app.host + '/books',
    method: 'GET'
  })
}

module.exports = {
  index
}
