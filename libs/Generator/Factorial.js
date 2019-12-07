let Generator = require("./Generator");

class Factorial extends Generator{
    constructor(){

    }

    //override
    generate(n){
        return (n != 1) ? n * this.generate(n - 1) : 1; 
    }
}

module.exports = Factorial;