const path = require('path');
const Student = require('../models/students');

exports.index = function(req,res){
    res.sendFile(path.resolve('views/students.html'));
}

exports.create = function(req, res){
    var newStudent = new Student(req.body);
    console.log(req.body);
    newStudent.save(function(err){
        if(err){
            res.status(400).send('Unable to save student to database');
        } else{
            res.redirect('/students/getstudents');
        }
    });
};