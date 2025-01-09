const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({

  productName: {
    type: String,
    required: true,
    trim:true
  },

  color:{
    type: String,
    required: true,
    trim:true,
  },
   
  category:{
    type:String,
    require:true,
    trim:true,
  } ,

  price:{

    type:Number,
    required:true,
    min: 0,

  }

}); 



module.exports = mongoose.model("Product", ProductSchema);
