var url = 'http://mylogger.io/log';

function cross(message){
    //vcjhcfjhfdjhf
    console.log(message);
};

module.exports.cross= cross;

const fs = require('fs');

fs.readdir('./', function(err,files){
    if(err){console,log('Error',err);}
    else{console.log('Result',files);}
});


