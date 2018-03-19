var grpc = require('grpc');

var booksProto = grpc.load('books.proto');

var server = new grpc.Server();
server.addService(booksProto.books.BookService.service, {
    list: function(call, callback) {
        callback(null, books);
    }
});
var books = [ 
    { id: 123, title: 'A Tale of Two Cities', author: 'Charles Dickens' }
  ];
//server.addService(booksProto.books.BookService.service, {});

server.bind('0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure());
console.log('Server running at http://0.0.0.0:50051');
server.start();