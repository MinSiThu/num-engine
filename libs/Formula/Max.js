let Formula = require("./Formula");

class Max extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    //override
    exec(){
        let max = Math.max(...this.numbers);
        return max;
    }

}

module.exports = Max;