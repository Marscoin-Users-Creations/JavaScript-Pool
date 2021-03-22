// default requires

var internet = require("net");

var ipsBanned = require("../ips/banned.json");
var ipsWhitelist = require("../ips/whitelist.json");


// internet vars

var internetServerAddress = "127.0.0.1";
var internetServerHosted = 1;
var internetServerPort = 30000;
var ipv4ConnectionsAllowed = 1;
var ipv6ConnectionsAllowed = 1;
var marsInternetConnectionsAllowed = 1;


// internet functions

var internetServer = net.createServer(function (internetSocket) {
    
    
    
});
internetServer.listen(internetServerPort, internetServerAddress);
var internetSocket = new net.Socket();
function receivingConnection(internetServer.connection.) {
    
    if (in_array(internetSocket.connection.remoteAddress, ipsBanned)) {
        
        Console.log("A banned IP tried to connect to the Pool !");
        Console.log("\nThe IP is " +internetSocket.connection.remoteAddress +" : " +internetSocket.connection.remotePort +" .");
        
    };
    
};
