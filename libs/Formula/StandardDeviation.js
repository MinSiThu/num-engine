let Formula = require("./Formula");

class StandardDeviation extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    exec(Mean,Variance){
        let variance = new Variance(this.numbers);
        let varianceResult = variance.exec(Mean);
        return Math.sqrt(varianceResult);
    }
}

module.exports = StandardDeviation;