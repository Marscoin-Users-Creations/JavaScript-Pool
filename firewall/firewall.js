// default requires

var fs = require("fs");

var bannedIps = require("../ips/banned.json");
var ipsDb = require("./ipsDb.json");


// firewall functions

function lookInDatabaseBannedIps() {
    
    
    
};
function lookInDatabaseWhitelistedIps() {
    
    
    
};


// firewall function

function firewall() {
    
    var newConnectionIp = "";
    if (newConnectionIp.is_in(bannedIps.ipsBanned)) {
        
        refuseConnection();
        Console.Log("A banned IP tried to connect to the pool, connection refused the ( IP : " +newConnectionIp +" ).");
        
    };
    
};
