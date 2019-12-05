let Generator = require("./Generator");

class RandomFloatGenerator extends Generator{
    constructor(){
        super();
    }

    //override
    //upper and lower limit both included
    generate(count,lowerLimit=0,upperLimit=1){
        let tempArray = [];
        let index = 0;
        while(index < count){
            let temp = this.generateFloat(lowerLimit,upperLimit);
            tempArray.push(temp);
            index++;
        }
        return tempArray;
    }
}

module.exports = RandomFloatGenerator;
