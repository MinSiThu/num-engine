let Formula = require("./Formula");

class Sort extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    //override
    exec(){ 
        return this.numbers.sort();
    }
}

module.exports = Sort;