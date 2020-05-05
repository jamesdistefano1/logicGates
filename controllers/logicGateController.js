const path = require('path');
const LogicGate = require('../models/logicGateModel');

exports.index = function(req,res){
    res.sendFile(path.resolve('views/logicGate.html'));
}

exports.create = function(req, res){
    var newGate = new LogicGate(req.body);
    console.log(req.body);
    newGate.save(function(err){
        if(err){
            res.status(400).send('Unable to save Logic Gate to database');
        }
        else {
            res.redirect('/students/getstudents');
        }
    });
};

exports.delete = function(req, res){
    await LogicGate.findOneAndDelete({_id: req.params.id}, (err,logicGate) => {
        if(err){
            return res.status(400).json({success: false, error: err});
        }

        if(!logicGate){
            return res
                .status(404)
                .json({success: false, error: 'Logic Gate not found'});
        }

        return res.status(200).json({success: true, data: logicGate});
    }).catch(err => console.log(err));
};