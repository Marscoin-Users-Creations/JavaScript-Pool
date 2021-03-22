// default requires

var internet = require("net");

var ipsBanned = require("../ips/banned.json");
var ipsWhitelist = require("../ips/whitelist.json");


// internet vars

var datasToSendToMiner = "";
var internetServerAddress = "127.0.0.1";
var internetServerHosted = 1;
var internetServerPort = 30000;
var ipv4ConnectionsAllowed = 1;
var ipv6ConnectionsAllowed = 1;
var marsInternetConnectionsAllowed = 1;


// internet functions

var internetServer = net.createServer(function (internetSocket) {
    
    if (internetSocket.connection.remoteAddress in ipsBanned) {
        
        Console.log("A banned IP tried to connect to the Pool !");
        Console.log("\nThe IP is " +internetSocket.connection.remoteAddress +" : " +internetSocket.connection.remotePort +" .");
        
    } else {
        
        Console.log("The device who is connected is not in the Pool blacklist, sending the datas to it !");
        internetSocket.write(datasToSendToMiner);
        
    };
    
});
internetServer.listen(internetServerPort, internetServerAddress);
var internetSocket = new net.Socket();
