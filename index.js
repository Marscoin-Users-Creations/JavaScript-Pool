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

// coins valid shares and blocks vars

var bitcoinTotalValidShares = 0,
    bitcoinValidBlocks = 0,
    bitcoinValidShares = 0,
    bitcoincashTotalValidShares = 0,
    bitcoincashValidBlocks = 0,
    bitcoincashValidShares = 0,
    bitcoingoldTotalValidShares = 0,
    bitcoingoldValidBlocks = 0,
    bitcoingoldValidShares = 0,
    dogecoinTotalValidShares = 0,
    dogecoinValidBlocks = 0,
    dogecoinValidShares = 0;

// wallet address and port

var bitcoinWalletAddress = "127.0.0.1",
    bitcoinWalletPort = 8332,
    bitcoincashWalletAddress = "127.0.0.1",
    bitcoincashWalletPort = 8332,
    bitcoingoldWalletAddress = "127.0.0.1",
    bitcoingoldWalletPort = 8332,
    dogecoinWalletAddress = "127.0.0.1",
    dogecoinWalletPort = 22555,
    ethereumWalletAddress = "127.0.0.1",
    ethereumWalletPort = 8545,
    ethereumclassicWalletAddress = "127.0.0.1",
    ethereumclassicWalletPort = 8545,
    litecoinWalletAddress = "127.0.0.1",
    litecoinWalletPort = 9432,
    litecoincashWalletAddress = "127.0.0.1",
    litecoincashWalletPort = 62457,
    marscoinWalletAddress = "127.0.0.1",
    marscoinWalletPort = 8332,
    megacoinWalletAddress = "127.0.0.1",
    megacoinWalletPort = 8332;

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
        
    };
    if (config.bitcoincash.miningEnabled = 1) {
        
        var bitcoincashPool = net.createServer();
        
    };
    if (config.bitcoingold.miningEnabled = 1) {
        
        var connectToBitcoinGoldPool = netClient.connect();
        var bitcoingoldPool = Stratum.createServer(config.bitcoingold.btgPool);
        bitcoingoldPool.on("share", function(isValidShare, isValidBlock, date) {
            
            
            
        });
        
    };
    if (config.dogecoin.miningEnabled = 1) {
        
        var dogecoinPool = net.createServer();
        
    };
    if (config.ethereum.miningEnabled = 1) {
        
        var connectToWallet = netClient.connect();
        var ethereumPool = Stratum.createServer(config.ethereum.ethPool);
        ethereumPool.on("share", function (isValidShare, isValidBlock, date) {
            
            if (isValidShare) {
                
                ethereumValidShares = ethereumValidShares +1;
                console.log("Ethereum share " +ethereumValidShares +" found !");
                
            };
            if (isValidBlock) {
                
                ethereumValidBlocks = ethereumValidBlocks +1;
                console.log("Ethereum block " +ethereumValidBlocks +" found !");
                
            };
            
        });
        
    };
    if (config.ethereumclassic.miningEnabled = 1) {
        
        var connectToWallet = netClient.connect({address: ethereumclassicWalletAddress, port: ethereumclassicWalletPort});
        var ethereumclassicPool = Stratum.createPool(config.ethereumclassic.etcPool);
        ethereumclassicPool.on("share", function(isValidShare, isValidBlock, date) {
            
            if (isValidShare) {
                
                ethereumclassicValidShares = ethereumclassicValidShares +1;
                console.log("Ethereum classic share " +ethereumclassicValidShares +" found !");
                
            };
            if (isValidBlock) {
                
                ethereumclassicValidBlocks = ethereumclassicValidBlocks +1;
                console.log("Ethereum classic block " +ethereumclassicValidBlocks +" found !");
                
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
            
            "address": config.litecoin.ltcPool.walletAddress,
            "algorithm": config.litecoin.ltcPool.algorithm,
            "coin": config.litecoin.ltcPool.coinName
            
        });
        
    };
    if (config.litecoincash.miningEnabled = 1) {
        
        
        
    };
    if (config.marscoin.miningEnabled = 1) {
        
        var connectToMarscoinWallet = netClient.connect(config.marscoin.walletAddress, config.marscoin.walletPort);
        var marscoinPool = Stratum.createPool({
            
            "address": config.marscoin.marsPool.walletAddress,
            "algorithm": config.marscoin.marsPool.algorithm,
            "coin": config.marscoin.marsPool.coinName
            
        });
        marscoinPool.on("share", function(isMarscoinValidShare, isMarscoinValidBlock, marscoinDate) {
            
            if (isMarscoinValidShare) {
                
                marscoinValidShares = marscoinValidShares +1;
                console.log("Found the share number " +marscoinValidShares +" !");
                
            };
            if (isMarscoinValidBlock) {
                
                marscoinValidBlocks = marscoinValidBlocks +1;
                console.log("Found the block number " +marscoinValidBlocks +" with " +marscoinValidShares +" on it !");
                marscoinTotalValidShares = marscoinTotalValidShares + marscoinValidShares;
                marscoinValidShares = 0;
                
            };
            
        });
        
    };
    if (config.megacoin.miningEnabled = 1) {
        
        var connectToWallet = netClient.connect(config.megacoin.walletAddress, config.megacoin.walletPort);
        var megacoinPool = Stratum.createPool({
            
            "address": config.megacoin.megaPool.walletAddress,
            "algorithm": config.megacoin.megaPool.algorithm,
            "coin": config.megacoin.megaPool.coinName
            
        });
        megacoinPool.on("share", function (isMegacoinValidShare, isMegacoinValidBlock, megacoinDate) {
            
            if (isMegacoinValidShare) {
                
                megacoinValidShares = megacoinValidShares +1;
                console.log("Found the share number " +megacoinValidShares +" !");
                
            };
            if (isMegacoinValidBlock) {
                
                megacoinValidBlocks = megacoinValidBlocks +1;
                console.log("Found the block number " +megacoinValidBlocks +" with " +megacoinValidShares +" on it !");
                megacoinTotalValidShares = megacoinTotalValidShares + megacoinValidShares;
                megacoinValidShares = 0;
                
            };
            
        });
        
    };
    if (config.uraniumx.miningEnabled = 1) {
        
        var connectionToUraniumxWallet = netClient.connect(config.uraniumx.walletAddress, config.uraniumx.walletPort);
        var uraniumxPool = Stratum.createPool({
            
            "address": config.uraniumx.urxPool.walletAddress,
            "algorithm": config.uraniumx.urxPool.algorithm,
            "coin": config.uraniumx.urxPool.coinNme
            
        });
        
    };
    
} else {
    
    console.log("Pool disabled, can't start it !");
    
};
