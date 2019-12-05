let Formula = require("./Formula");

class Sum extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    //override
    exec(){
        let reducer= (accumulator,currentValue)=>{
            return accumulator+currentValue;
        }
        return this.numbers.reduce(reducer);
    }
}

module.exports = Sum;