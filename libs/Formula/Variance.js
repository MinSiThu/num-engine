let Formula = require("./Formula");

class Variance extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    //override
    exec(Mean){
        let wholeMeanExecutor = new Mean(this.numbers);
        let wholeMean = wholeMeanExecutor.exec();

        let variance = new Mean(this.numbers.map(number=>{
            return Math.pow(num - wholeMean, 2); 
        }))
        return variance.exec();
    }
}

module.exports = Variance;