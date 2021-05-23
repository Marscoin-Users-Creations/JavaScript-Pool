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
                
                "eth": {
                    
                    "activated": 1,
                    "name": "Ethereum"
                    "walletAddress": "127.0.0.1:"
                    
                }
                
            },
            "pool": {
                
                "enable": 0,
                "maxconnections": 25000,
                "port": 2000x
                
            }
            
        },
        "scrypt": {
            
            "coins": {
                
                "ltc": {
                    
                    "activated": 1,
                    "name": "Litecoin",
                    "walletAddress": ""
                    
                },
                "mars": {
                    
                    "activated": 1,
                    "name": "Marscoin",
                    "walletAddress": "127.0.0.1:"
                    
                },
                "moon": {
                    
                    "activated": 1,
                    "name": "Mooncoin"
                    "walletAddress": "127.0.0.1:"
                    
                }
                
            },
            "pool": {
                
                "enable": 0,
                "maxconnections": 25000,
                "port": 2000x
                
            }
            
        },
        "sha256": {
            
            "coins": {
                
                "btc": {
                    
                    "activated": 1,
                    "name": "Bitcoin"
                    "walletAdress": "127.0.0.1:"
                    
                }
                
            },
            "pool": {
                
                "enable": 0,
                "maxconnections": 25000,
                "port": 2000x
                
            }
            
        },
        "x11": {
            
            "coins": {},
            "pool": {
                
                "enable": 1,
                "maxconnections": 25000,
                "port": 2000x
                
            }
            
        },
        "x12": {
            
            
            
        },
        "x13": {
            
            
            
        },
        "x14": {
            
            
            
        },
        "x15": {
            
            
            
        },
        "x16": {
            
            
            
        }
        
    }
    
};

// pool vars

if (config.miningPool.enabled = 1) {
    
    if (config.algos.ethash.pool.enabled = 1) {
        
        var ethashPool = net.createServer([], ethashConnection);
        ethashPool.listen(config.algos.ethash.pool.port);
        ethashPool.maxConnections(config.algos.ethash.pool.maxconnections);
        ethashPool.on("connection", ethashConnection => {
            
            
            
        });
        
    };
    if (config.algos.scrypt.pool.enabled = 1) {
        
        var scryptPool = net.createServer();
        scryptPool.listen(config.algos.scrypt.pool.port);
        scryptPool.maxConnections(config.algos.scrypt.pool.maxconnections);
        scryptPool.on("connection", scryptConnection => {
            
            
            
        });
        
    };
    if (config.algos.sha256.pool.enabled = 1) {
        
        var sha256Pool = net.createServer();
        sha256Pool.listen(config.algos.sha256.pool.port);
        sha256Pool.maxConnections(config.algos.sha256.pool.maxconnections);
        sha256Pool.on("connection", sha256Connection => {
            
            
            
        });
        
    };
    if (config.algos.x11.pool.enabled = 1) {
        
        var x11Pool = net.createServer();
        x11Pool.listen();
        x11Pool.maxConnections(config.algos.x11.pool.maxconnections);
        x11Pool.on("connection", x11Connection => {
            
            
            
        });
        
    };
    
};
