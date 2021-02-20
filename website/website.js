// default requires

var fs = require("fs");
var http = require("http");
var https = require("https");
var url = require("url");

var homePage = fs.readFile("./pages/home.html", "utf-8");
var httpServerConfig = require("./httpServerConfig.json");
var httpsServerConfig = require("./httpsServerConfig.json");
var loginPage = fs.readFile("./pages/login.html", "utf-8");
var websiteConfig = require("../configs/config.json");


// default functions




// website vars

if (websiteConfig.httpServerEnabled = 1) {
    
    var httpWebsite = http.createServer(function (httpReq, httpRes) {
        
        var httpPage = url.parse(httpReq.httpRes).query;
        
        if (httpPage == "/home") {
            
            httpRes.writeHead(200, {"Content-Type": "text/html"});
            httpRes.write(homePage);
            
        };
        if (httpPage == "/login") {
            
            httpRes.writeHead(200, {"Content-Type": "text/html"});
            httpRes.write(loginPage);
            
        };
        
        
    }).listen(httpServerConfig.httpServerPort);
    
};

if (websiteConfig.httpsServerEnabled = 1) {
    
    var httpsWebsite = https.createServer(function (httpsReq, httpsRes) {
        
        var httpsPage = url.parse(httpsReq.httpsRes).query;
        
        if (httpsPage == "/home") {
            
            httpsRes.writeHead(200, {"Content-Type": "text/html"});
            httpsRes.write(homePage);
            
        };
        if (httpsPage == "/login") {
            
            httpsRes.writeHead(200, {"Content-Type": "text/html"});
            httpsRes.write(loginPage);
            
        };
        
        
    }).listen(httpsServerConfig.httpsServerPort);
    
};
