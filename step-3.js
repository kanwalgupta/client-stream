var https = require('https');
function getAndPrintHTML (options) {



  /* Add your code here */
  // notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {
    var dataReceived = {} ;
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      dataReceived += data;
    });
     // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log(dataReceived);
    });
  });
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
getAndPrintHTML(requestOptions);