'use strict'

const onSuccess = function (data) {
  console.log('AWESOME!! SUCCESS!!')
  console.log('data is ', data)
}

const onFailure = function () {
  console.log('Sad face.')
}

module.exports = {
  onSuccess,
  onFailure
}
