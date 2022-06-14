var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const studentModel = require("../models/student.model");

/* GET users listing. */
router.get("/students", function (req, res) {
  res.send("Students Route Work");
});

router.get("/add", (req, res) => {
  let newStudent = new studentModel({
    studentId: 100,
    firstName: "ABC",
    lastName: "XYZ",
    age: 18,
    dob: "2004 - 05 -21",
    department: "ASC",
  });
  newStudent.save(function (err, newStudent) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        status: 200,
        message: "User Added Successfully",
        studentObj: newStudent,
      });
    }
  });
});

module.exports = router;
