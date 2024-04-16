const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  // validate req.body - Done
  // create MongoDB UserModel - Done
  // do password encrytion - Done
  // save data to mongodb -
  // return response to the cliein
  registerUser: async (req, res) => {
    const userModel = new UserModel(req.body);
    userModel.password = await bcrypt.hash(req.body.password, 10);
    try {
      const response = await userModel.save();
      response.password = undefined;
      return res.status(201).json({ message: "success", data: response });
    } catch (err) {
      return res.status(500).json({ message: "error", err });
    }
  },

  // check user using email
  // compare password
  // create jwt token
  // send response to client
  loginUser: async (req, res) => {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Auth failed, Invalid username/password" });
      }

      const isPassEqual = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPassEqual) {
        return res
          .status(401)
          .json({ message: "Auth failed, Invalid username/password" });
      }
      const tokenObject = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      };
      const jwtToken = jwt.sign(tokenObject, "full=secret", {
        expiresIn: "4h",
      });
      return res.status(200).json({ jwtToken, tokenObject });
    } catch (err) {
      return res.status(500).json({ message: "error 2.2", err });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await UserModel.find({}, { password: 0 });
      return res.status(200).json({ data: users });
    } catch (err) {
      return res.status(500).json({ message: "error", err });
    }
  },

  fillTender: async (req, res) => {
    try {
      // Extract form data from req.body
      const formData = req.body;
      const doc = new pdfkit();
      // doc.text(formData.name);
      // Send PDF as response
      res.setHeader("Content-Type", "application/pdf");
      doc.pipe(res);
      doc.end();

      // Save PDF details to MongoDB
      await PdfModel.create(formData);
    } catch (err) {
      return res.status(400).json({
        message: "errror in fillTender",
        err,
      });
    }
  },
  getTender: async (req, res) => {
    try {
    } catch (err) {
      return res.status(400).json({
        message: "errror in getTender",
        err,
      });
    }
  },
  updateTender: async (req, res) => {
    try {
      const { id } = req.params;
      const newData = req.body;

      // Update PDF details in MongoDB
      await PdfModel.findByIdAndUpdate(id, newData);

      res.send("PDF details updated successfully");
    } catch (err) {
      return res.status(400).json({
        message: "errror in updateTender",
        err,
      });
    }
  },
};
