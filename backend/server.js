const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

///ENV vars for when not using Docker
dotenv.config({ path: '../env/backend.env' }); 

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! [ Shutting down ]');
  console.log(err.name, err.message);
  process.exit(1);
});

//>  PORT VALUE CREATED 
const _port = process.env.PORT || 80;

//> SWITCH FOR USING DB ENGINE OR NOT
if(process.env.DB_MODE=='ON'){
const _DB = process.env.DATABASE.replace('<db_user>', process.env.MONGODB_USERNAME).replace('<db_password>',process.env.MONGODB_PASSWORD);

//> MONGODB CONNECTION PROCESS
mongoose.connect(_DB).then( success =>{
    console.log('[ DATABASE CLUSTER: [ CONNECTED ]');
    console.log(`[ APP RUNNING ON [ PORT: ${_port} ]`);
    const server = app.listen(_port);
  }).catch(err=>{
    console.error('[ FAILED TO CONNECT TO DATABASE CLUSTER ]');
    console.error(err);
  }); 

} else {
  //> SIMPLE SERVER PROCESS CREATED
  const server = app.listen(_port);
  console.log(`APP RUNNING ON [ PORT: ${_port} ]`);
}

//> SERVER ERROR HANDLER
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION!  [ Shutting down ]');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});


