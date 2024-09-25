const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const todoSchema = require("../schemas/todoSchema");
const Todo = new mongoose.model("Todo", todoSchema); //model
const checkLogin = require("../middleware/checkLogin");

//GET ALL THE TODO
router.get("/", checkLogin, (req, res) => {
  Todo.find({ status: "active" })
    .select({
      _id: 0, //expect this field
      _v: 0, //expect this field
      data: 0, //expect this field
    })
    .limit(2)
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "success",
        });
      }
    });
});

//GET A TODO
router.get("/:id", async (req, res) => {
  // await Todo.find({ _id: req.params.id }, (err, data) => {
  //   if (err) {
  //     res.status(500).json({
  //       error: "There was a server side error!",
  //     });
  //   } else {
  //     res.status(200).json({
  //       result: data,
  //       message: "success",
  //     });
  //   }
  // });

  try {
    const data = await Todo.find({ _id: req.params.id });
    res.status(200).json({
      result: data,
      message: "Success",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error!",
    });
  }
});

// POST TODO
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body); //actual document
    await newTodo.save();
    res.status(200).json({
      message: "Todo was inserted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server error",
    });
  }
});

//POST MULTIPLE TODO
router.post("/all", async (req, res) => {
  await Todo.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Successfully inserted all the data",
      });
    }
  });
});

//PUT TODO
router.put("/:id", async (req, res) => {
  const result = await Todo.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        status: "active",
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error",
        });
      } else {
        res.status(200).json({
          message: "Todo was uploaded successfully",
        });
      }
    }
  );
  console.log(result);
});

//DELETE TODO
router.delete("/:id", async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "success",
      });
    }
  });
});

///----------------------Instance method-------
//Get Active Todos
router.get("/active", async (req, res) => {
  const todo = new Todo();
  const data = await todo.findActive();
  res.status(200).json({
    data,
  });
});

//Get Active TODOS with callbacks
router.get("/active-callback", async (req, res) => {
  const todo = new Todo();
  todo.findActiveCallback((err, data) => {
    res.status(200).json({
      data,
    });
  });
  // const data = await todo.findActive();
  // res.status(200).json({
  //   data,
  // });
});
///----------------------Static method-------
router.get("/js", async (req, res) => {
  const data = await Todo.findByJS();
  res.status(200).json({
    data,
  });
});

// -------query helper-------------
router.get("/language", async (req, res) => {
  const data = await Todo.find().byLanguage("js");
  res.status(208).json({
    data,
  });
});

module.exports = router;
