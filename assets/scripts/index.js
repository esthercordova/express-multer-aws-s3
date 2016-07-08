'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(() => {
  $('#application-x-www-form-data').on('submit', (event) => {
    let getFormFields = require('../../lib/get-form-fields');

    event.preventDefault();

    $.ajax({
      method: 'POST',
      url: 'http://httpbin.org/post',
      data: getFormFields(event.target),
    })
    .done((data) => console.log(data))
    .fail((fail) => console.error(error));
  });

  $('#multipart-form-data').on('submit', (event) => {
    event.preventDefault();

    $.ajax({
      method: 'POST',
      url: 'http://httpbin.org/post',
      data: new FormData(event.target),
      ContentType: false,
      processData: false,
    })
    .done((data) => console.log(data))
    .fail((fail) => console.error(error));
  });
});
