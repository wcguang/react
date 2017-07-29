let express=require('express');
let mongodb=require('mongodb');
let mongoCt=mongodb.MongoClient;
let router=express.Router();
router.get('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
	mongoCt.connect('mongodb://localhost:27017/react',function(err,db){
		var con=db.collection('solve');
		con.find().toArray(function(err,result){
			console.log(result)
			res.send(result)
		})
	})
});
module.exports=router;