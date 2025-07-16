// const crypto = require('crypto');
// const { promisify } = require('util');
// const jwt = require('jsonwebtoken');
// const User = require('../models/userModel');
// const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
// const sendEmail = require('../utils/email');
///////////////////////////////////////////////////
///////////////////////////////////////////////////

exports.logout = (req, res) => {
    // res.cookie('jwt', 'loggedout', {
    //   expires: new Date(Date.now() + 10 * 1000),
    //   httpOnly: true,
    //   domain: undefined, //UNRESTRICTS THE COOKIES SENT TO CLIENT
    // });
    res.status(200).json({ status: 'success' });
  };
  