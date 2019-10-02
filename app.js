var mongodb = require('mongodb').MongoClient,
	http =require('http'), 
	fs=require('fs'),
	client = require('socket.io').listen(8000).sockets;


var server=http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
 	 fs.createReadStream("./index.html").pipe(response);
}).listen(2222);

console.log("server listening");


mongodb.connect('mongodb://127.0.0.1/chat',function(err,db){
	if (err) throw err;
	client.on('connection',function(socket){
		console.log("someone connected");
		
		var dbCollection = db.collection('messages');

		dbCollection.find().limit(100).toArray(function(err,result){
			if (err) throw err;
			socket.emit('output',result);
		})

		socket.on('input',function(data){
				var name= data.name,
					message= data.message;

				client.emit('output',[data]);
				dbCollection.insert({name:name, message:message},function(){
					return true;
				});	
		});

	});	

});

