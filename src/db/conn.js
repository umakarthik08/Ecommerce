const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/umakarthik",
).then(()=>{
    console.log("connnection succesful");
}).catch((error)=>
{
    console.log(error);
})