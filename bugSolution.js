const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle potential errors gracefully
server.on('error', (err) => {
  console.error('Server error:', err);
});

//Start the server
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

//Improved error handling ensures that the server can handle failures more gracefully and prevent unexpected crashes.  The server now actively listens for and logs errors that may occur.