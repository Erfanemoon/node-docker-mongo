var express = require('express');
var router = express.Router();
var City = require('../../models/city');
var ObjectID = require('mongodb').ObjectID;


router.get('/list',async(req , res)=>{
    try{
        var city = await City.find();
        res.status(200).send(city);
    }catch(err){
        res.send({message : err});
    }
      
});

router.post('/add' , (req , res)=>{
    /*City.create(req.body).then(function(data){
        res.status(200).send(data);
    });*/
    
    var city = new City({
        air_quality : req.body.air_quality,
        temperature:req.body.temperature,
        sea_conditions:req.body.sea_conditions,
        city:req.body.city
    });

    city.save().then(data=>{
        res.status(200).json(data);
    }).catch(err=>{
        res.status(500).json(err);
    });
    //console.log(req.body); 
});

router.get('/delete/:postId' ,async (req,res)=>{
    try{
        // try with remove afterwards if you faced error
        var deleted =await City.deleteOne({_id : ObjectID(req.params.postId)});
        res.status(200).send('object with _id' + req.params.postId + 'deleted');
    }catch(err){
        res.status(500).send({message : err});
    }
});

router.get('/get/:postId',async (req,res)=>{
    try{
        var data =await City.findOne(ObjectID(req.params.postId));
        res.status(200).send(data);
    }catch(err){
        res.status(500).send({message : err});
    }
});

router.post('/update',async (req,res)=>{
    try{
        var updateData = await City.updateOne({_id : ObjectID(req.body._id)} , 
        {$set : 
            { city:req.body.city,
              temperature : req.body.temperature,
              air_quality:req.body.air_quality,
              sea_conditions:req.body.sea_conditions} 
    });
    res.status(200).send(updateData);
    }catch(err){
        res.status(500).send({message : err});
    }
});

module.exports = router;