const express = require("express")
const bodyPraser = require("body-parser")
const https = require("https")
const favicon =require("serve-favicon")
const path =require("path")
const app = express()
app.use(express.static("public"))
app.use(favicon(path.join(__dirname, 'public','photo', 'favicon.ico')));
// for using the value in body od html
app.use(bodyPraser.urlencoded({extended:true}))
// to give data to user
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
   })
//    the user post data
app.post("/",function(req,res){
    const firstName =req.body.firstName
    const lastName =req.body.lastName
    const email =req.body.email

    // geting data structure from api(custom)
    const data =  {
                members:[{email_address:email,
                status:"subscribed",
                    merge_fields:{
                        FNAME:firstName,
                        LNAME:lastName}
                }]
    };
    // convert the js data to flat json 
    const jsonData=JSON.stringify(data)
    //    api endpoint with list id
    const url="https://us21.api.mailchimp.com/3.0/lists/ef642d774c"
    // option method for https request
    const Options ={
        method:"POST",
        auth:"api:ea71ad220541d19003a981f698b45a33-us21"
    }
    
    // post request to api server
    const request= https.request(url,Options,function(responce){
        if (responce.statusCode === 200){
            res.sendFile(__dirname+"/success.html")
        }
        else{
            res.sendFile(__dirname+"/failure.html")
          
        }
        responce.on("data",function(data){
        console.log(JSON.parse(data))
        
    })
    
    })
    request.write(jsonData)
    request.end()
})
// post methpd for statuscode 404
app.post("/failure.html",function(req,res){
    res.redirect("/")
})

app.listen(3000,function(){
    console.log("server is running on 3000.")
    console.log("click here: http://localhost:3000")
})
