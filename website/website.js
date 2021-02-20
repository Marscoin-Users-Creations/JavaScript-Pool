// default requires

var fs = require("fs");
var http = require("http");
var https = require("https");
var url = require("url");

var homePage = fs.readFile("./pages/home.html", "utf-8");
var loginPage = fs.readFile("./pages/login.html", "utf-8");


// default functions




// website vars

var httpWebsite = http.createServer(function (httpReq, httpRes) {
    
    var httpPage = url.parse(httpReq.httpRes);
    
    if (httpPage == "/home") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(homePage);
        
    };
    if (httpPage == "/login") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(loginPage);
        
    };
    
});
