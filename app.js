var mongodb = require('mongodb').MongoClient,
	http =require('http'), 
	fs=require('fs'),
	client = require('socket.io').listen(8000).sockets;


let server= http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
 	 fs.createReadStream("./index.html").pipe(response);
})

let port = "2222";
server.listen(port, '127.0.0.1');

server.on('listening', function (e) {
	console.log("server listening");
	const url = 'mongodb://127.0.0.1:27017';
	const dbName = 'chat';

	mongodb.connect(url, { useUnifiedTopology: true,useNewUrlParser: true }, (err, db) => {
		if (err) throw err;

		db = db.db(dbName)
		console.log(`Connected MongoDB: ${url}`)
		console.log(`Database: ${dbName}`)
		client.on('connection',function(socket){
			var dbMessages = db.collection('messages');
			var dbUsers = db.collection('users');

			dbMessages.find().limit(100).toArray(function(err,result){
				if (err) throw err;
				socket.emit('output',result);
			})

			dbUsers.find().toArray(function(err,result){
				if (err) throw err;
				socket.emit('users',result);
			})

			socket.on('input',function(data){
				var name= data.name,
					message= data.message;
					logout = data.logout;
				

				if(message){
					client.emit('output',[data]);
					dbMessages.insertOne({name:name, message:message},function(){
						return true;
					});	
				}

				if(logout){
					dbUsers.updateOne({name:name}, {$set:{name:name,online:false}},async function(){
						await dbUsers.find({}).toArray(function(err,result){
							if (err) throw err;
							client.emit('users',result);
						});
					});
				}

				if(name){
					dbUsers.findOne({name:name},async function(err, user){
						if(!user){
							dbUsers.insertOne({name:name, online:true},function(){
								return true;
							});		
						}

						await dbUsers.find({}).toArray(function(err,result){
							if (err) throw err;
							client.emit('users',result);
						});
					});
				}
			});

		});	

	});
});

  