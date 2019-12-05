let path = require("path");

module.exports = {
    entry:"./index.js",
    output:{
        path:path.join(__dirname,"output"),
        filename:"num-engine.js"
    }
}