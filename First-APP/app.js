//const os = require('os');

//var totalMemory= os.totalmem();
//var freeMemory= os.freemem();

//console.log(`Total Memory: ${totalMemory}, Free Memory:${freeMemory}`);


const EventEmitter = require('events');
const emitter= new EventEmitter();

// Register a listener 
emitter.on('messageLogged', function(arg){
console.log('Listener called',arg);
});



//Raie an event
emitter.emit('messageLogged',{id:5, url:'html//'});


//new Listener
emitter.on('logging',function(sss){
    console.log('no',sss);
});



//Raise : logging(data:message)

emitter.emit('logging',{data: 'yes I can'});


const http= require('http');
const var1= 5;

const server= http.createServer((req, res)=>{
    const var2=6;
    if(req.url === '/'){
        
        const body = 'hello world of Sweden';
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain',
      })
      .end(body);


    };})

    



server.listen(3000); 
console.log('its working on port 3000')