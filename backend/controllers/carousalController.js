
const Carousal = require('../model/Carousal');

const  createCarousal = async(req,res)=>{
    try{
         console.log("req is ",req.body);

         const {image,title} = req.body;

            const carousal = new Carousal({
                image,
                title
            });

            await carousal.save();

            res.status(201).json(carousal);
         

    }catch(err){
        res.status(500).json({error:err.message});

    }
}

const getCarousal = async(req,res)=>{
    try{
        const carousal = await Carousal.find();
        res.status(200).json(carousal);
    }catch(err){
        res.status(500).json({error:err.message});
    }
}

module.exports = {createCarousal,getCarousal};