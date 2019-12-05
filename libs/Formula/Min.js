let Formula = require("./Formula");

class Min extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    //override
    exec(){
        let min = Math.min(...this.numbers);
        return min;
    }
}

module.exports = Min;