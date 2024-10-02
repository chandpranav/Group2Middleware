import Router from "express";

export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const getUserData = async (req, res) => {
  try {
    const email = req.params.id;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const email = req.params.id;
    const updatedUser = await User.findOneAndUpdate(
      { email },
      req.body,
      { new: true, runValidators: true } // `new: true` returns the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const deleteUserData = async (req, res) => {
  try {
    const email = req.params.id;
    const deletedUser = await User.findOneAndDelete({ email });

    if (!deletedUser) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

/*
Controller has two parts
    High level code
    Low level Logic/Services/Modular Code

Create a folder called services
    user.service.js

    import user from "../model/user"
    
    getUserbyEmail function
        const user = await user.find({email});

    in the controller we can use const user = getUserbyemail(email);
*/
