var expressv=require('express')
var bodyParser=require('body-parser')
var exp=expressv()
exp.use(bodyParser.urlencoded({ extended: false }))

exp.use(bodyParser.json())


 
exp.post("/",(req,res)=>{
    res.send("Welcome to my Page.")
    
})
exp.get("/home",(req,res)=>{
    res.send("A GET page..")
})
exp.post("/Sum",(req,res)=>{
    var no1=parseFloat(req.body.num1)  
    var no2=parseFloat(req.body.num2)
    let resultvar
    resultvar=no1+no2 
    res.json({"Number 1":no1,"Number 2":no2,"Result":resultvar})
})
exp.listen(3001,()=>{
    console.log("Server Running...")
})
