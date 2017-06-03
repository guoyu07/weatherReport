const request=require('request');
const express=require('express');
const path=require('path');
const app=express();
var data='';
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
// const url="http://api.yytianqi.com/forecast7d?city=CH281701&key=1r3fajefo4csg9tm";
const url=' http://api.yytianqi.com/forecast7d?city=CH281701&key=1r3fajefo4csg9tm';
request(url,(error,response,body)=>{
	if(error && response.statusCode==200){
		console.log(error);
	}
	// console.log(body);
	data=body;
	// console.log(data);
});
app.get('/api/weather/',(req,res)=>{
	res.send(data);
});
app.get('/',(req,res)=>{
	res.render('index');
});
app.get('/s1',(req,res)=>{
	res.render('index2');
});
app.listen(3000,()=>{
	console.log('success');
})