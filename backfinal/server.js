const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const app=express();
app.use(cors());
app.use(bodyParser.json());

const {Schema}=mongoose;
const productSchema=new Schema(
    {
        image:
        {
            type:String,
            required:true,
        },
        title:
        {
            type:String,
            required:true,
        },
        text:
        {
            type:String,
            required:true,
        },  
    },
    {timestamps:true}
);
 const Product=mongoose.model("product",productSchema);

//  get all products
app.get("/product",(req,res)=>{
    Product.find({},(err,docs)=>{
        if (!err) {
            res.send(docs)
        }else{
            res.status(500).json({message:err})
        }
    });
});
app.post("/product",(req,res)=>{
    const products=new Product({
        image:req.body.image,
        title:req.body.title,
        text:req.body.text,
    });
    products.save();
    res.send({message:"SUCCESS"})
});
app.delete("/product/:id",(req,res)=>{
    const {id}=req.params;
    Product.findByIdAndDelete(id,(err)=>{
        if (!err) {
            res.send({message:"SUCCESSFULY DELETED"})
        }else{
            res.status(500).json({message:err})
        }

    });
});
const PORT=process.env.PORT;
const DB=process.env.DB_URL;
mongoose.set("strictQuery",false)
mongoose.connect(DB,(err)=>{
    if (!err) {
        console.log("CONNECTED");
        app.listen(PORT,(err)=>{
            if (!err) {
                console.log(`PORT:${PORT}`);
            }
        })
        
    }
})

