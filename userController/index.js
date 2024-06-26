const UserModel = require("../models/UserModel");
const TenderForm = require('../models/TenderFormModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
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
            return res.status(201).json({ message: 'success', data: response });
        } catch (err) {
            return res.status(500).json({ message: 'error', err });
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
                return res.status(401)
                    .json({ message: 'Auth failed, Invalid username/password' });
            }

            const isPassEqual = await bcrypt.compare(req.body.password, user.password);
            if (!isPassEqual) {
                return res.status(401)
                    .json({ message: 'Auth failed, Invalid username/password' });
            }
            const tokenObject = {
                _id: user._id,
                fullName: user.fullName,
                email: user.email
            }
            const jwtToken = jwt.sign(tokenObject, "full=secret", { expiresIn: '4h' });
            return res.status(200)
                .json({ jwtToken, tokenObject });
        } catch (err) {
            return res.status(500).json({ message: 'error 2.2', err });
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await UserModel.find({}, { password: 0 }).sort({ createdAt: 1 }).limit(1);
            return res.status(200)
                .json(users);
        } catch (err) {
            return res.status(500)
                .json({ message: 'error', err });
        }
    },

    storeTenderForm: async (req, res) => {
        try {
            const { equipmentName, tenderNo, piName, piEmail, departmentName, estimatedCost, earnestMoney, turnover, date, tenderSubmissionLastDate, querySubmissionDate, responseReleaseDate, bidOpeningDate, bidOpeningTime, warrantyDuration, depositByBidder, technicalSpecifications, experienceInField, quantity } = req.body;
            const users = await UserModel.find({}, { password: 0 }).sort({ createdAt: 1 }).limit(1).exec();
            if (!users) {
                return res.status(404).json({ message: 'User not found' });
            }
            const newSubmission = { equipmentName, tenderNo, piName, piEmail, departmentName, estimatedCost, earnestMoney, turnover, date, tenderSubmissionLastDate, querySubmissionDate, responseReleaseDate, bidOpeningDate, bidOpeningTime, warrantyDuration, depositByBidder, technicalSpecifications, experienceInField,quantity };
            await UserModel.findOneAndUpdate({}, { $push: { formSubmissions: newSubmission } },
                { new: true });

            res.status(200).send('Form data saved successfully');
        } catch (error) {
            res.status(500).send('Error saving form data: ' + error.message);
        }
    },
}