let Formula = require("./Formula");

class Mean extends Formula{
    constructor(num){
        super();
        this.numbers = num;
    }

    //override
    exec(){
        let sum = 0;
        this.numbers.forEach(number => {
           sum += number; 
        });
        return sum/this.numbers.length;
    }
}

module.exports = Mean;