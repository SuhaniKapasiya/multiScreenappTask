

const Product = require('../model/Product');



const createProduct = async(req,res) =>{

    try{
      
        const newProduct  = new Product(req.body)
        const saveProduct = await newProduct.save();

        res.status(201).json(saveProduct);

    }catch(error){

        res.status(400).json({ error: error.message });
    }


}


const getProduct = async(req,res)=>{
    try{

        const product = await Product.find();
        res.status(200).json(product);

     }catch(error){

        res.status(404).json({error:error.message})

    }
}


module.exports = { createProduct, getProduct };