let express =require('express');
let expressStatic=require('express-static');
let cookieParser=require('cookie-parser');
let cookieSession=require('cookie-session');
let bodyParser=require('body-parser');
let cors=require('cors');
let mongodb=require('mongodb');
let mongoCt=mongodb.MongoClient;
let server=express();
server.use(bodyParser());
server.use(cookieParser());
// server.use(cors({
// 	origin:['http://localhost:8006'],
// 	method:['GET','POST'],
// 	alloweHeaders:['Content-Type', 'Authorization']
// }))
// mongoCt.connect('mongodb://localhost:27017/react',function(err,db){
// 	var co=db.collection('solve');
// 	co.find().toArray(function(err,result){
// 		console.log(result)
// 	})
// })
server.use('/solve',require('./router/solve.js'));
server.use('/news',require('./router/news.js'));
server.use('/case',require('./router/case.js'));
server.listen(8090,function(){
	console.log('loading....')
})