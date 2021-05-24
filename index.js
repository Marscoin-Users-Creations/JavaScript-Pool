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
                    "walletAddress": "127.0.0.1:"
                    
                },
                "eth": {
                    
                    "activated": 0,
                    "name": "Ethereum"
                    "walletAddress": "127.0.0.1:"
                    
                },
                "etp": {
                    
                    "activated": 1,
                    "name": "Metaverse Entropy",
                    "walletAddress": "127.0.0.1:"
                    
                },
                "music": {
                    
                    "activated": 1,
                    "name": "Musicoin",
                    "walletAddress": "127.0.0.1"
                    
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
                    "walletAddress": "127.0.0.1:"
                    
                },
                "ltc": {
                    
                    "activated": 0,
                    "name": "Litecoin",
                    "walletAddress": "127.0.0.1"
                    
                },
                "mars": {
                    
                    "activated": 0,
                    "name": "Marscoin",
                    "walletAddress": "127.0.0.1:"
                    
                },
                "moon": {
                    
                    "activated": 0,
                    "name": "Mooncoin"
                    "walletAddress": "127.0.0.1:"
                    
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
                    "walletAdress": "127.0.0.1:"
                    
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

// pool vars

if (config.miningPool.enabled = 1) {
    
    if (config.algos.ethash.pool.enabled = 1) {
        
        var ethashPool = net.createServer([], ethashConnection);
        ethashPool.listen(config.algos.ethash.pool.poolport);
        ethashPool.maxConnections(config.algos.ethash.pool.maxconnections);
        ethashPool.on("connection", ethashConnection => {
            
            
            
        });
        
    };
    if (config.algos.scrypt.pool.enabled = 1) {
        
        var scryptPool = net.createServer();
        scryptPool.listen(config.algos.scrypt.pool.poolport);
        scryptPool.maxConnections(config.algos.scrypt.pool.maxconnections);
        scryptPool.on("connection", scryptConnection => {
            
            
            
        });
        
    };
    if (config.algos.sha256.pool.enabled = 1) {
        
        var sha256Pool = net.createServer();
        sha256Pool.listen(config.algos.sha256.pool.poolport);
        sha256Pool.maxConnections(config.algos.sha256.pool.maxconnections);
        sha256Pool.on("connection", sha256Connection => {
            
            
            
        });
        
    };
    if (config.algos.x11.pool.enabled = 1) {
        
        var x11Pool = net.createServer();
        x11Pool.listen(config.algos.x11.pool.poolport);
        x11Pool.maxConnections(config.algos.x11.pool.maxconnections);
        x11Pool.on("connection", x11Connection => {
            
            
            
        });
        
    };
    if (config.algos.x12.pool.enabled = 1) {
        
        var x12Pool = net.createServer();
        x12Pool.listen(config.algos.x12.pool.poolport);
        x12Pool.maxConnections(config.algos.x12.maxconnections);
        x12Pool.on("connection", x12Connection => {
            
            
            
        });
        
    };
    
};
