const express=require("express");
const connectDb=require("./config/dbConnection");
//error handling middleware
const errorHandler=require("./middleware/errorhand");
const cors=require("cors");



connectDb();
const app=express();
const port=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(ErrorHandler);

app.get('/',(req,res)=>{
    res.send("server is still working")
})

//app config start
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
});