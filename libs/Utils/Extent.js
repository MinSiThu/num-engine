let Utility = require("./Utility");

class Extent extends Utility{
    constructor(numbers){
        super(numbers);
    }

    //override
    help(Min,Max){
        let min = new Min(this.numbers);
        let max = new Max(this.numbers);
        
        let minResult = min.exec();
        let maxResult = max.exec();

        return [minResult,maxResult];
    }
}

module.exports = Extent;