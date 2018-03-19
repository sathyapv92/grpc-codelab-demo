var grpc = require('grpc');

var booksProto = grpc.load('books.proto');

var client = new booksProto.books.BookService('127.0.0.1:50051', 
  grpc.credentials.createInsecure());

client.list({}, function(error, books) {
  if (error)
    console.log('Error: ', error);
  else
    console.log(books);
});