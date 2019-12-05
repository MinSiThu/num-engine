let Formula = require("./Formula");

class Median extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    //override
    exec(){
        let count = this.numbers.length;
        let middle = count/2;
        if(count % 2 == 0){
            return (this.numbers[middle]+this.numbers[middle+1])/2;
        }
        return this.numbers[middle+1]
    }
}

module.exports = Median;