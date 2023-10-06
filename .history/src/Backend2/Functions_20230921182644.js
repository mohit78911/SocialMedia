const userModuls = require("./modal/user");
const likeData = require("./LikeData");
const fs = require("fs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

//signup function
const signup = async (req, res) => {
  try {
    const existinguser = await userModuls.findOne({
      email: req.body.email,
      username: req.body.username,
    });
    if (existinguser) {
      return res.send("User Already Exists");
    }

    const result = await userModuls.create({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      lastseen: req.body.lastseen,
      imgpost: req.body.imgpost,
      userprofile: req.body.userprofile,
      like: req.body.like,
      comment: req.body.comment,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "hellothisismohitsutharfromrajasthan"
    );

    res.status(200).json({ userData: result, token: token });
    console.log("Data Added Successfully");
  } catch (error) {
    console.log(error);
    res.send("Something Went Wrong...");
    res.end();
    console.log("Something Wrong...");
  }
};

// like section
// const likeActivity = (req, res) => {
//   let newData = new likeData({
//     _id: new mongoose.Types.ObjectId(),
//     like: req.body.like,
//     unlike: req.body.unlike,
//   });
//   newData
//     .save()
//     .then((result) => {
//       res.status(200).json(result);
//       console.log("liked");
//     })
//     .catch((error) => {
//       console.log("Not Liked");
//     });
// };

//signin function
const signin = async (req, res) => {
  try {
    const existinguser = await userModuls.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (!existinguser) {
      return res.send("Invalid Details...");
      res.end();
    }

    const hashedPassword = bcrypt.compare(
      req.body.password,
      existinguser.password
    );

    const token = jwt.sign(
      {
        email: existinguser.email,
        password: hashedPassword,
        id: existinguser._id,
      },
      "hellothisismohitsutharfromrajasthan"
    );

    res.status(201).json({
      UserProfile_Accessed: existinguser,
      token: token,
    });
    console.log("Login Successfully");
  } catch (error) {
    res.send("Something Went Wrong...");
    res.end();
    console.log("Error with Login");
  }
};

//get data handler
const getData = (req, res) => {
  userModuls
    .find()
    .then((result) => {
      res.status(200).json(result);
      console.log("Data Fetch Done.");
    })
    .catch((error) => {
      console.log("Error with Data fetching....");
    });
};

//delete handler with id
function deleteData(req, res) {
  userModuls
    .deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(202).json(result);
      console.log("Delete Successfully");
    })
    .catch((error) => {
      console.log("Deleting Error...");
    });
}

// update by id handler
const updateById = (req, res) => {
  userModuls
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          lastseen: req.body.lastseen,
          imgpost: req.body.imgpost,
          userprofile: req.body.userprofile,
          like: req.body.like,
        },
      }
    )
    .then((result) => {
      res.status(200).json(result);
      console.log("Update Successfully");
    })
    .catch((error) => {
      console.log("Error with Update ");
    });
};

module.exports = {
  signup,
  signin,
  getData,
  updateById,
  deleteData,
  // likeActivity,
};
