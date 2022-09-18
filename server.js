//Import third-party nodejs module "Connect"
const connect = require('connect');

//Instatiate app-server
const app = connect();

//Custom middleware: text/plain
function helloPlain(req,res,next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application as html');
}

//Custom middleware: text/html
function helloHTML(req,res,next){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello from NodeJS Application as html</h1>');
}

//Custom middleware: application/json
function helloJSON(req,res,next){
    res.setHeader('Content-Type', 'application/json');
    res.end('{“message”: “Hello from NodeJS Application as json”}');
}

//Add middleware to connect application
app.use('/html',helloHTML);
app.use('/json',helloJSON);
app.use('/',helloPlain);

//Run app
app.listen(3000);

console.log('*** Server running at http://localhost:3000 ***');