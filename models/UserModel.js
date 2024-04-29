const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenderFormSchema = new Schema({
    equipmentName: String,
    tenderNo: String,
    piName: String,
    piEmail: String,
    departmentName: String,
    estimatedCost: Number,
    earnestMoney: Number,
    turnover: Number,
    date: Date,
    tenderSubmissionLastDate: Date,
    querySubmissionDate: Date,
    responseReleaseDate: Date,
    bidOpeningDate: Date,
    bidOpeningTime: String,
    warrantyDuration: Number,
    depositByBidder: Number,
    technicalSpecifications: String,
    experienceInField: String,
    quantity:String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    formSubmissions: [tenderFormSchema]
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;

