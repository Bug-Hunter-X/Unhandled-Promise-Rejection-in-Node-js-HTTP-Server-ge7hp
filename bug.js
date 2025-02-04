const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Problem: Unhandled promise rejections can lead to process crashes without informative error messages.
//Unhandled promise rejections are typically caused by asynchronous operations (like network requests, database queries, or file I/O) that don't handle errors properly.
//Example: A database query might fail because the database is unavailable. Without error handling in the promise chain, this failure might lead to an unhandled rejection and eventual process crash.

//In this example, the server starts and successfully responds with the message 'Hello, World!' to any requests. However, there is no handling of potential errors that may arise.

//Adding proper error handling to prevent unhandled rejections ensures that the server can handle failures more gracefully, preventing unexpected crashes.