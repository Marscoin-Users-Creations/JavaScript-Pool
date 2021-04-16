// default vars

var fs = require("fs");
var http = require("http");
var net = require("net");
var url = require("url");

var blockMining = null;
var config = {
    
    "bitcoin": {
        
        "algo": "sha256",
        "blockNumber": 0,
        "btcPool": {
            
            
            
        },
        "difficulty": 0,
        "miningEnabled": 1,
        "symbol": "BTC"
        
    },
    "bitcoinclassic": {
        
        "algo": "sha256",
        "difficulty": 0,
        "miningEnabled": 1,
        "symbol": "BXC"
        
    },
    "bitcoingold": {
        
        "algo": "Equihash_144_5",
        "difficulty": 0,
        "miningEnabled": 1,
        "symbol": "BTG"
        
    },
    "dogecoin": {
        
        "algo": "scrypt",
        "difficulty": 0,
        "dogecoinMiningEnabled": 1,
        "symbol": "DOGE"
        
    },
    "ethereum": {
        
        "algo": "ethash",
        "difficulty": 0,
        "ethPool": {
            
            "coin": "ethereum",
            "address": "walletAddress",
            "blockRefreshInterval": 2000,
            
        },
        "miningEnabled": 1,
        "symbol": "ETH"
        
    },
    "ethereumclassic": {
        
        "algo": "etchash",
        "difficulty": 0,
        "etcPool": {
            
            "coin": "ethereum classic",
            "address": "",
            "blockRefreshInterval": 2000,
            "txRefreshInterval": 2000,
            "jobRebroadcastTimeout": 30,
            "connectionTimeout": 300,
            "emitInvalidBlockHashes": false,
            "shareVariancePercent": 10,
            "tcpProxyProtocol": false,
            "banning": {
                
                "enabled": true,
                "time": 300,
                "invalidPercent": 60,
                "checkTreshold": 100,
                "purgeInterval": 300
                
            },
            "ports": {
                
                "10000": {
                    
                    "diff": "1",
                    "varDiff": {
                        
                        "minDiff": 1,
                        "maxDiff": 100000000000000,
                        "targetTime": 10,
                        "regargetTime": 60,
                        "variancePercent": 0
                        
                    }
                    
                },
                "11001": {
                    
                    "diff": 10
                    
                }
                
            },
            "daemons": [{
                
                "host": "127.0.0.1",
                "port": ""
                
            }]
            
        },
        "miningEnabled": 1,
        "symbol": "ETC"
        
    },
    "litecoin": {
        
        "algo": "scrypt",
        "difficulty": 1",
        "miningEnabled": 1,
        "symbol": "LTC"
        
    },
    "litecoincash": {
        
        "algo": "",
        "difficulty": 1",
        "miningEnabled": 1,
        "symbol": "LCC"
        
    },
    "marscoin": {
        
        "algo": "scrypt",
        "difficulty": 1",
        "miningEnabled": 1,
        "symbol": "MARS"
        
    },
    "megacoin": {
        
        "algo": "Mega-Mec",
        "difficulty": 1,
        "miningEnabled": 1,
        "symbol": "MEGA"
        
    },
    "uaniumx": {
        
        "algo": "yespowerurx",
        "difficulty": 1,
        "miningEnabled": 1,
        "symbol": "URX"
        
    }
    
};
var poolEnabled = 1;

// default rpc commands vars

var getDifficulty = '{"jsonrpc": "1.0", "method": "getdifficulty", "params": [], "id": ""}';
var requestWork = '{"jsonrpc": "1.0", "method": "getwork", "params": [] "id": ""}';
var sendCoins = '{"jsonrpc"! "1.0", "method": "sendcoins", "params": ["from": "' +fromWalletAddress +'", "to": "' +toWalletAddress +'", "amount": ' +coinsAmount'], "id": "anything"}';
var sendWork = '{"jsonrpc": "1.0", "method": "sendresult", "params": ["result": "' +workDone +'"], "id": ""}';

// wallet address and port

var bitcoinWalletAddress = "127.0.0.1";
var bitcoinWalletPort = 8332;
var bitcoincashWalletAddress = "127.0.0.1";
var bitcoincashWalletPort = 8332;
var bitcoingoldWalletAddress = "127.0.0.1";
var bitcoingoldWalletPort = 8332;
var dogecoinWalletAddress = "127.0.0.1";
var dogecoinWalletPort = 22555;
var ethereumWalletAddress = "127.0.0.1";
var ethereumWalletPort = 8545;
var ethereumclassicWalletAddress = "127.0.0.1";
var ethereumclassicWalletPort = 8545;
var litecoinWalletAddress = "127.0.0.1";
var litecoinWalletPort = 9432;
var litecoincashWalletAddress = "127.0.0.1";
var litecoincashWalletPort = 62457;
var marscoinWalletAddress = "127.0.0.1";
var marscoinWalletPort = 8332;
var megacoinWalletAddress = "127.0.0.1";
var megacoinWalletPort = 8332;

// web pages

var dashboardPage = fs.readFile("./html/dashboard.html", "utf-8");
var homePage = fs.readFile("./html/home.html", "utf-8");
var minersPage = fs.readFile("./html/miners.html", "utf-8");

// default functions

function getBlockNumberFromWallet() {
    
    netClient.send(chosenCoinWalletAddress, chosenCoinWalletPort, {"method": "getwork", "params": [], "id": "anything"});
    
};
function getWorkFromWallet() {
    
    netClient.send(chosenCoinWalletAddress, chosenCoinWalletPort, {'"method": "sendwork", "params": [' +chosenCoinWorkDone +'], "id": "anything"'});
    
};

// website function

var website = http.createServer(function (req, res) => {
    
    var websitePage = url.parse(req.res).pathname;
    if (page == "/home") {
        
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(homePage);
        
    };
    
});

// pool

if (poolEnabled = 1) {
    
    if (config.bitcoin.miningEnabled = 1) {
        
        var bitcoinPool = net.createServer();
        bitcoinPoolNet.listen(config.bitcoin.bitcoinPoolPort);
        
    };
    if (config.bitcoincash.miningEnabled = 1) {
        
        var bitcoincashPool = net.createServer();
        bitcoincashPool.listen(config.bitcoincash.bitcoincashPoolPort);
        
    };
    if (config.bitcoingold.miningEnabled = 1) {
        
        var bitcoingoldPool = net.createServer();
        bitcoingoldPool.listen(config.bitcoingold.bitcoingoldPoolPort);
        
    };
    if (config.dogecoin.miningEnabled = 1) {
        
        var dogecoinPool = net.createServer();
        dogecoinPool.listen(config.dogecoin.dogecoinPoolPort);
        
    };
    if (config.ethereum.miningEnabled = 1) {
        
        var ethereumPool = net.createServer();
        ethereumPool.listen(config.ethereum.ethereumPoolPort);
        
    };
    if (config.ethereumclassic.miningEnabled = 1) {
        
        var ethereumclassicPool = Stratum.createPool(config.ethereumclassic.etcPool);
        ethereumclassicPool.on("share", function(isValidShare, isValidBlock, date) {
            
            if (isValidShare) {
                
                ethereumValidShares = ethereumValidShares +1;
                console.log("Share " +ethereumValidShares +" found");
                
            };
            
        });
        
    };
    if (config.ethereumgold.miningEnabled = 1) {
        
        var ethereumgoldPool = net.createServer();
        ethereumgoldPool.listen(config.ethereumgoldPool);
        
    };
    if (config.litecoin.miningEnabled = 1) {
        
        var connectToWallet = netClient.connect({address: config.litecoin.walletAddress, port: config.litecoin.walletPort});
        var litecoinPool = Stratum.createPool({
            
            "address": config.litecoin.litecoinPool.walletAddress,
            "algorithm": config.litecoin.litecoinPool.algorithm,
            "coin": config.litecoin.litecoinPool.coinName
            
        });
        
    };
    if (config.litecoincash.miningEnabled = 1) {
        
        
        
    };
    if (config.marscoin.miningEnabled = 1) {
        
        
        
    };
    if (config.megacoin.miningEnabled = 1) {
        
        var connectToWallet = netClient.connect();
        var megacoinPool = Stratum.createPool({
            
            "address": config.megacoin.megacoinPool.walletAddress,
            "algorithm": config.megacoin.megacoinPool.algorithm,
            "coin": config.megacoin.megacoinPool.coinName
            
        });
        
    };
    if (config.uraniumx.miningEnabled = 1) {
        
        
        
    };
    
} else {
    
    console.log("Pool disabled, can't start it !");
    
};
