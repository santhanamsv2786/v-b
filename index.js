const express = require('express');
const app = express();
require("./db/config");
const User = require('./db/User');
const Read = require('./db/Read');
const Delete = require('./db/Delete');
const body = require('body-parser');
const cors = require('cors');

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
app.use(body.json());
app.use(cors(corsOptions));

app.post('/signin', async (req, res) =>{

    let user = new User();
    user.name = req.body.name;
    user.mail = req.body.mail;
    user.password = req.body.password;
    user.phone = req.body.phone;
    user.location = req.body.location;
    user.id = req.body.id
    
    console.log("err-"+user.name)
    let result = await user.save();
    console.log("res-"+result)
    res.send(result);
});

app.post('/user/read', Read.resetpass);
app.post('/user/delete', Delete.deletemethod);
//put
app.put("/update/:id", async(req,res)=>{

    let upid = req.params.id;
    let upname = req.body.name;
    let upmail = req.body.mail;
    let uppassword = req.body.password;
    let upphone = req.body.phone;
    let uplocation = req.body.location
    
    User.findOneAndUpdate({id:upid},{$set:{name:upname,mail:upmail,password:uppassword,phone:upphone,location:uplocation}},
        {new:true},(err,data)=>{
         if(err)    
         {
            res.send("error")
         }else{   
            if(data==null){
                res.send("nothing found")
            }else{
                res.send("ID is Updated Sucessfully")
            }
        }
    })
})      

//Delete
app.delete('/delete/:id',function(req,res){

    let delid=req.params.id;
    User.findOneAndDelete(({id:delid}),function(err,datas){
        if(err){
            res.send("Errorr")
        }
        else{
            if(datas==null){
                res.send("ID is not available")
            }
            else{
                res.send("ID is deleted Sucessfully");
            }
        }
    })
})

app.get('/alldata', async (req, res) =>{
    
    let result = await User.find();
    console.log("res-"+result)
    res.send(result);
});

app.get('/alldatas', async (req, res) =>{
    
    let result = await User.find();
    console.log("res-"+result)
    res.send(result);
});

app.listen("8000");
console.log('running');

