// default vars

var fs = require("fs");
var http = require("http");
var net = require("net");
var url = require("url");

var blockMining = null;
var config = require("./config.json");
var poolEnabled = 1;

// default rpc commands vars

var getDifficulty = '{"jsonrpc": "1.0", "method": "getdifficulty", "params": [], "id": ""}';
var getWork = '{"jsonrpc": "1.0", "method": "getwork", "params": [], "id": ""}';
var sendCoinsToOneAddress = '{"jsonrpc": "1.0", "method": "", "params": ["from": "' +fromWalletAddress +'", "to": "' +toWalletAddress +'", "amount": ' +coinsAmount'], "id": "anything"}';

// web pages vars

var dashboardPage = fs.readFile("./html/dashboard.html", "utf-8");
var homePage = fs.readFile("./html/home.html", "utf-8");
var minersPage = fs.readFile("./html/miners.html", "utf-8");

// default functions

function getBlockNumberFromWallet(var blockNumber) {
    
    netClient.send(chosenCoinWalletAddress, chosenCoinWalletPort, );
    
};
function getWorkFromWallet(var workToDo) {
    
    netClient.send(chosenCoinWalletAddress, chosenCoinWalletPort, {'"method": "getwork", "params": [], "id": ""'});
    
};
function sendWorkDoneToWallet(var workDone) {
    
    netClient.send(chosenCoinWalletAddress, chosenCoinWalletPort, {'"method": "sendwork", "params": ["work": "' +workDone +'"], "id": ""'});
    
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
    
    if (config.pools.bitcoin.enabled = 1) {
        
        var bitcoinPool = Stratum.createServer({
            
            "'address': ""config.pools.bitcoin.address,
            "port": config.pools.bitcoin.address,
            "algorithm": '"' +config.pools.bitcoin.algo +'"'
            
        });
        bitcoinPool.on("share", function(isBitcoinValidShare, isBitcoinValidBlock, date) {
            
            if (isBitcoinValidShare) {
                
                config.pools.bitcoin.validshares = config.pools.bitcoin.validshares +1;
                console.log("BITCOIN : Share number " +config.pools.bitcoin.validshares +" found !");
                
            };
            if (isBitcoinValidBlock) {
                
                config.pools.bitcoin.totalvalidshares = config.pools.bitcoin.totalvalidshares +config.pools.bitcoin.validshares;
                config.pools.bitcoin.validblocks = config.pools.bitcoin.validblocks +1;
                console.log("BITCOIN : Block number " +config.pools.bitcoin.blocknumber +" with " +config.pools.bitcoin.validshares +" found !");
                config.pools.bitcoin.validshares = 0;
                
            };
            
        });
        
    };
    if (config.pools.bitcoincash.enabled = 1) {
        
        var bitcoincashPool = Stratum.createServer({
            
            "address: '" +config.pools.bitcoincash.address +"'",
            "port": config.pools.bitcoincash.port
            
        });
        bitcoincashPool.on("share", function (isBitcoincashValidShare, isBitcoincashValidBlock, date) {
            
            if (isBitcoincashValidShare) {
                
                bitcoincashValidShares = bitcoincashValidShares + 1;
                console.log("BITCOIN CASH : Share number " +bitcoincashValidShares +" found !");
                
            };
            if (isBitcoincashValidBlock) {
                
                bitcoincashTotalValidShares = bitcoincashTotalValidShares + bitcoincashValidShares;
                bitcoincashValidBlocks = bitcoincashValidBlocks +1;
                console.log("BITCOIN CASH : Block number " +bitcoincashValidBlocks +" with " +bitcoincashValidShares +" shares found !");
                bitcoincashValidShares = 0;
                
            };
            
        });
        
    };
    if (config.bitcoingold.miningEnabled = 1) {
        
        var bitcoingoldPool = Stratum.createServer({
            
            "address": config.bitcoingold.btgPool.address
            
        });
        bitcoingoldPool.on("share", function(isBitcoingoldValidShare, isBitcoingoldValidBlock, date) {
            
            if (isBitcoingoldValidShare) {
                
                bitcoingoldValidShares = bitcoingoldValidShares +1;
                console.log("BITCOIN GOLD : Share number " +bitcoingoldValidShares =" found !");
                
            };
            if (isBitcoingoldValidBlock) {
                
                bitcoingoldTotalValidShares = bitcoingoldTotaliValidShares + bitcoingoldValidShares;
                bitcoingoldValidBlocks = bitcoingoldValidBlocks +1;
                console.log("BITCOIN GOLD : Block number " +bitcoingoldValidBlocks +" with " +bitcoingoldValidShares +" shares found !");
                bitcoingoldValidShares = 0;
                
            };
            
        });
        
    };
    if (config.dogecoin.miningEnabled = 1) {
        
        var dogecoinPool = Stratum.createServer({
            
            
            
        });
        dogecoinPool.on("share", function(isDogecoinValidShare, isDogecoinValidBlock, date) {
            
            if (isDogecoinValidShare) {
                
                dogecoinValidShares = dogecoinValidShares +1;
                console.log("DOGECOIN : Share number " +dogecoinValidShares +" found !");
                
            };
            if (isDogecoinValidBlock) {
                
                dogecoinTotalValidShares = dogecoinTotalValidShares +dogecoinValidShares;
                dogecoinValidBlocks = dogecoinValidBlocks +1;
                console.log("DOGECOIN : Block number " +dogecoinValidBlocks +" with " +dogecoinValidShares +" shares found !");
                dogecoinValidShares = 0;
                
            };
            
        });
        
    };
    if (config.ethereum.miningEnabled = 1) {
        
        var connectToWallet = netClient.connect();
        var ethereumPool = Stratum.createServer(config.ethereum.ethPool);
        ethereumPool.on("share", function (isEthereumValidShare, isEthereumValidBlock, date) {
            
            if (isEthereumValidShare) {
                
                ethereumValidShares = ethereumValidShares +1;
                console.log("ETHEREUM : Share number " +ethereumValidShares +" found !");
                
            };
            if (isEthereumValidBlock) {
                
                ethereumTotalValidShares = ethereumTotalValidShares + ethereumValidShares;
                ethereumValidBlocks = ethereumValidBlocks +1;
                console.log("ETHEREUM : Block number " +ethereumValidBlocks +" with " +ethereumValidShares +" shares found !");
                ethereumValidShares = 0;
                
            };
            
        });
        
    };
    if (config.ethereumclassic.miningEnabled = 1) {
        
        var connectToWallet = netClient.connect({address: ethereumclassicWalletAddress, port: ethereumclassicWalletPort});
        var ethereumclassicPool = Stratum.createPool(config.ethereumclassic.etcPool);
        ethereumclassicPool.on("share", function(isValidShare, isValidBlock, date) {
            
            if (isValidShare) {
                
                ethereumclassicValidShares = ethereumclassicValidShares +1;
                console.log("ETHEREUM CLASSIC : Share number " +ethereumclassicValidShares +" found !");
                
            };
            if (isValidBlock) {
                
                ethereumclassicTotalValidShares = ethereumclassicTotalValidBlocks +ethereumclassicValidShares;
                ethereumclassicValidBlocks = ethereumclassicValidBlocks +1;
                console.log("ETHEREUM CLASSIC : Block number " +ethereumclassicValidBlocks +" with " +ethereumclassicValidShares  +" shares found !");
                ethereumclassicValidShares = 0;
                
            };
            
        });
        
    };
    if (config.ethereumgold.miningEnabled = 1) {
        
        var ethereumgoldPool = net.createServer();
        ethereumgoldPool.listen(config.ethereumgoldPool);
        
    };
    if (config.litecoin.miningEnabled = 1) {
        
        var litecoinPool = Stratum.createPool({
            
            "address": config.litecoin.ltcPool.walletAddress,
            "algorithm": config.litecoin.ltcPool.algorithm,
            "coin": config.litecoin.ltcPool.coinName
            
        });
        litecoinPool.on("share", function(isLitecoinValidShare, isLitecoinValidBlock, date) {
            
            if (isLitecoinValidShare) {
                
                
                
            };
            if (isLitecoinValidBlock) {
                
                litecoinTotalValidShares = litecoinTotalValidShares +litecoinValidShares;
                litecoinValidBlocks = litecoinValidBlocks +1;
                console.log("LITECOIN : Block with " +litecoinValidShares +" shares found !");
                litecoinValidShares = 0;
                
            };
            
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
