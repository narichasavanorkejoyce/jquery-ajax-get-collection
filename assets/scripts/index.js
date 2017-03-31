'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// Connect this page to the events.js function
const bookEvents = require('./books/events.js')

$(() => {
  setAPIOrigin(location, config)
  // Attach a submit handler to the books form
  $('.books').on('submit', bookEvents.onGetBooks)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled

// function (event) {
//   // Prevent the page from refreshing
//   // Always do this on click handlers
//   event.preventDefault()
//   // The console should print when the button is clicked
//   console.log('You clicked the books button')
// }
