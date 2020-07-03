const express = require("express");
const router = express.Router();
const userInfo = require("../models/user");
const favInfo = require("../models/books");
const cors = require("cors");

router.use(cors());

router.post("/register", (req, res, next) => {
  console.log("request", req);
  const user = new userInfo({
    emailId: req.body.emailId,
    password: req.body.password,
  });
  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  res.status(201).json({
    message: "Handling post request",
    createdUser: user,
  });
});

router.post("/login", function (req, res, next) {
  userInfo
    .findOne({ emailId: req.body.emailId })
    .then((user) => {
      console.log(user, "user");
      console.log(req.body);
      if (user) {
        if (req.body.password == user.password) {
          res.status(201).json(user);
        } else {
          res.send("password does not match");
        }
      } else {
        res.send("User does not exist");
      }
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.post("/favorites", (req, res, next) => {
  const book = req.body.book;
  const userId = req.body.userId;
  const favBook = new favInfo({
    book,
    userId,
  });
  favBook
    .save()
    .then((data) => {
      console.log("Saved Succesfully");
      res.send({ added: true });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id/favorites", (req, res, next) => {
  favInfo
    .find({ userId: req.params.id })
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.delete("/favorites/:id", function (req, res, next) {
  console.log(req.params.id);
  favInfo.findByIdAndDelete(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
