const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

const _data = 'WELCOME, SUCCESFULLY FETCHED!!';

exports.init = catchAsync(async(req,res,next)=>{

  res.status(200).json({
    status: 'success',
    _data
  });
  
});