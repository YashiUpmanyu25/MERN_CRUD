//module imports
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

//make server object and put it in new variable app

const app=express();



//MIDDLEWARES

//when any request comes form port or react(frontend) to the server, it will go backend and then it will go to the database and then it will come back to the frontend and then it will show the data on the frontend
app.use(cors());
//when any request came from frontend  in json format then it should understancdable to backend  so we use
app.use(express.json());



// connecting mongodb

mongoose.connect('mongodb://127.0.0.1:27017/booksdbNew',{

}).then(()=>{
    console.log('mongodb connected');
}).catch((err)=>{
    console.error('Mongodb connection failed:',err);


});

//backend server runnig on default route/base url
// in this every request from client 
app.get('/',(req,res)=>{
    res.send('Backend is running...');

});

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`server is runing  on port ${PORT}`);
})
