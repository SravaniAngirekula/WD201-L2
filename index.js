const http=require("http");
const fs=require("fs");
let homecontent="";
let projectcontent="";
let registrationcontent="";
const args = require("minimist")(process.argv.slice(2));
fs.readFile("home.html",(err,home)=>{
    if(err){ throw err};
    homecontent=home.toString();
});
fs.readFile("project.html",(err,project)=>{
    if(err){
        throw err;
    }
    projectcontent=project.toString();
});
fs.readFile("registration.html",(err,registration)=>{
    if(err){
        throw err;
    }
    registrationcontent=registration.toString();
});
http.createServer((request,response)=>{
    let url=request.url;
    response.writeHead(200,{"content-type":"text/html"});
    switch(url)
    {
        case "/project":
            response.write(projectcontent);
            response.end();
            break;
        case "/registration":
            response.write(registrationcontent);
            response.end();
            break;
        default:response.write(homecontent);
        response.end();
        break;
    }
}).listen(args["port"]);
