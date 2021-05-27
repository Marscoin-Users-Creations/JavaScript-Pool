// default requires

var fs = require("fs");
var http = require("http");
var net = require("net");
var url = require("url");

// configs vars

var config = {
    
    "algos": {
        
        "ethash": {
            
            "coins": {
                
                "etc": {
                    
                    "activated": 0,
                    "name": "Ethereum Classic",
                    "walletAddress": "SetWalletAddressHere:SetWalletPortHere"
                    
                },
                "eth": {
                    
                    "activated": 0,
                    "name": "Ethereum"
                    "walletAddress": "SetWalletAddressHere:SetWalletPortHere"
                    
                },
                "etp": {
                    
                    "activated": 1,
                    "name": "Metaverse Entropy",
                    "walletAddress": "SetWalletAddressHere:SetWalletPortHere"
                    
                },
                "music": {
                    
                    "activated": 1,
                    "name": "Musicoin",
                    "walletAddress": "SetWalletAddressHere:SetWalletPortHere"
                    
                }
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        },
        "scrypt": {
            
            "coins": {
                
                "lcc": {
                    
                    "activated": 0,
                    "name": "Litecoin Classic",
                    "walletAddress": "SetWalletAddressHere:SetWalletPortHere"
                    
                },
                "ltc": {
                    
                    "activated": 0,
                    "name": "Litecoin",
                    "walletAddress": "SetWalletAddressHere:SetWalletPortHere"
                    
                },
                "mars": {
                    
                    "activated": 0,
                    "name": "Marscoin",
                    "walletAddress": "SetWalletAddressHere:SetWalletPortHere"
                    
                },
                "moon": {
                    
                    "activated": 0,
                    "name": "Mooncoin"
                    "walletAddress": "SetWalletAddressHere:SetWalletPortHere"
                    
                }
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        },
        "sha256": {
            
            "coins": {
                
                "btc": {
                    
                    "activated": 0,
                    "name": "Bitcoin"
                    "walletAdress": "SetWalletAddressHere:SetWalletPortHere"
                    
                }
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        },
        "x11": {
            
            "coins": {
                
                "hatch": {
                    
                    "activated": 0,
                    "name": "Hatch",
                    "walletAddress": "SetWalletAddressHere:SetWalletPortHere"
                    
                }
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        },
        "x12": {
            
            "coins": {
                
                
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        },
        "x13": {
            
            "coins": {
                
                
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        },
        "x14": {
            
            "coins": {
                
                
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        },
        "x15": {
            
            "coins": {
                
                
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        },
        "x16": {
            
            "coins": {
                
                
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        },
        "x16s": {
            
            "coins": {
                
                
                
            },
            "pool": {
                
                "enabled": 0,
                "maxconnections": 25000,
                "poolport": 2000x
                
            }
            
        }
        
    }
    
};

// work vars

var askingWorkToWallet = '{"jsonrpc": "1.0", "id": "curltest", "method": "getwork", "params": [] }';
var getBlockTemplateFromWallet = '{"jsonrpc": "1.0", "id": "curltest", "method": "getblocktemplate", "params": [] }';
var sendingWorkDoneToWallet = '{"jsonrpc": "1.0", "id": "curltest", "method": "submitheader", "params": [ "' +poolWorkDone +'" ] }';

// pool vars

if (config.miningPool.enabled = 1) {
    
    if (config.algos.c11.pool.enabled = 1) {
        
        var c11Pool = net.createServer(function(c11Connection){
            
            if (c11Connection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +c11Connection.stream.remoteAddress +" ( banned ) tried to connect to the c11 pool !");
                c11Connection.close();
                
            } else {
                
                
                
            };
            
        });
        c11Pool.listen(config.algos.c11.pool.poolport);
        c11Pool.maxConnections(config.algos.c11.pool.maxconnections);
        
    };
    if (config.algos.ethash.pool.enabled = 1) {
        
        var ethashPool = net.createServer(function(ethashConnection) {
            
            if (ethashConnection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +ethashConnection.stream.remoteAddress +" ( banned ) tried to connect to the ethash pool !");
                ethashConnection.close();
                
            } else {
                
                
                
            };
            
        });
        ethashPool.listen(config.algos.ethash.pool.poolport);
        ethashPool.maxConnections(config.algos.ethash.pool.maxconnections);
        
    };
    if (config.algos.scrypt.pool.enabled = 1) {
        
        var scryptPool = net.createServer(function(scryptConnection) {
            
            if (scryptConnection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +scryptConnection.stream.remoteAddress +" ( banned ) tried to connect to the scrypt pool !");
                scryptConnection.close();
                
            } else {
                
                
                
            };
            
        });
        scryptPool.listen(config.algos.scrypt.pool.poolport);
        scryptPool.maxConnections(config.algos.scrypt.pool.maxconnections);
        
    };
    if (config.algos.sha256.pool.enabled = 1) {
        
        var sha256Pool = net.createServer(function(sha256Connection) {
            
            if (sha256Connection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +sha256Connection.stream.remoteAddress +" ( banned ) tried to connect to the sha256 pool !");
                sha256Connection.close();
                
            } else {
                
                
                
            };
            
        });
        sha256Pool.listen(config.algos.sha256.pool.poolport);
        sha256Pool.maxConnections(config.algos.sha256.pool.maxconnections);
        
    };
    if (config.algos.x11.pool.enabled = 1) {
        
        var x11Pool = net.createServer(function(x11Connection) {
            
            if (x11Connection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +x11Connection.stream.remoteAddress in ips.banned);
                x11Connection.close();
                
            } else {
                
                
                
            };
            
        });
        x11Pool.listen(config.algos.x11.pool.poolport);
        x11Pool.maxConnections(config.algos.x11.pool.maxconnections);
        
    };
    if (config.algos.x12.pool.enabled = 1) {
        
        var x12Pool = net.createServer(function(x12Connection) {
            
            if (x12Connection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +x12Connection.stream.remoteAddress +" ( banned ) tried to connect to the x12 pool !");
                x12Connection.close();
                
            } else {
                
                
                
            };
            
        });
        x12Pool.listen(config.algos.x12.pool.poolport);
        x12Pool.maxConnections(config.algos.x12.pool.maxconnections);
        
    };
    if (config.algos.x13.pool.enabled = 1) {
        
        var x13Pool = net.createServer(function(x13Connection) {
            
            if (x13Connection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +x13Connection.stream.remoteAddress +" ( banned ) tried to connect to the x13 pool !");
                x13Connection.close();
                
            } else {
                
                
                
            };
            
        });
        x13Pool.listen(config.algos.x13.pool.poolport);
        x13Pool.maxConnections(config.algos.x13.pool.maxconnections);
        
    };
    if (config.algos.x14.pool.enabled = 1) {
        
        var x14Pool = net.createServer(function(x14Connection) {
            
            if (x14Connection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +x14Connection.stream.remoteAddress +" ( banned ) tried to connect to the x14 pool !");
                x14Connection.close();
                
            } else {
                
                
                
            };
            
        });
        x14Pool.listen(config.algos.x14.pool.poolport);
        x14Pool.maxConnections(config.algos.x14.pool.maxconnections);
        
    };
    if (config.algos.x15.pool.enabled = 1) {
        
        var x15Pool = net.createServer(function(x15Connection) {
            
            if (x15Connection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +x15Connection.stream.remoteAddress +" ( banned ) tried to connect to the x15 pool !");
                x15Connection.close();
                
            } else {
                
                
                
            };
            
        });
        x15Pool.listen(config.algos.x15.pool.poolport);
        x15Pool.maxConnections(config.algos.x15.pool.maxconnections);
        
    };
    if (config.algos.x16.pool.enabled = 1) {
        
        var x16Pool = net.createServer(function(x16Connection) {
            
            if (x16Connection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +x16Connection.stream.remoteAddress +" ( banned ) tried to connect to the X16 pool !");
                x16Connection.close();
                
            } else {
                
                
                
            };
            
        });
        x16Pool.listen(config.algos.x16.pool.poolport);
        x16Pool.maxConnections(config.algos.x16.pool.poolport);
        
    };
    if (config.algos.x16r.pool.enabled = 1) {
        
        var x16rPool = net.createServer(function(x16rConnection) {
            
            if (x16rConnection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +x16rConnection.stream.remoteAddress +" ( banned ) tried to connect to the X16r pool !");
                x16rConnection.close();
                
            } else {
                
                
                
            };
            
        });
        x16rPool.listen(config.algos.x16r.pool.poolport);
        x16rPool.maxConnections(config.algos.x16r.pool.maxconnections);
        
    };
    if (config.algos.x16s.pool.enabled = 1) {
        
        var x16sPool = net.createServer(function(x16sConnection) {
            
            if (x16sConnection.stream.remoteAddress in ips.banned) {
                
                console.log("The IP " +x16sConnection.stream.remoteAddress +" ( banned ) tried to connect to the x16s pool !");
                x16sConnection.close();
                
            } else {
                
                x16sConnection.on("data", function(datasReceived) {
                    
                    if (datasReceived == workAsked) {
                        
                        x16sConnection.write(newWork);
                        
                    };
                    if (datasReceived == workDone) {
                        
                        
                        
                    };
                    
                });
                x16sConnection.on("error", function(x16sPoolError) {
                    
                    console.log("The error " +x16sPoolError +" has occured !")
                    
                });
                
            };
            
        });
        x16sPool.listen(config.algos.x16s.pool.poolport);
        x16sPool.maxConnections(config.algos.x16s.pool.maxconnections);
        
    };
    
};
