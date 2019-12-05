let Formula = require("./Formula");

class ReverseSort extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    exec(){
        return this.numbers.reverse();
    }
}

module.exports = ReverseSort;