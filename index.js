let Mean = require("./libs/Formula/Mean");
let Median = require("./libs/Formula/Median");
let Sort = require("./libs/Formula/Sort");
let ReverseSort = require("./libs/Formula/ReverseSort");
let Generator = require("./libs/Generator/Generator");
let RandomFloatGenerator = require("./libs/Generator/RandomFloatGenerator");
let RandomIntegerGenerator = require("./libs/Generator/RandomIntegerGenerator");

let initialConfig = {
    sorted:false,
    preExec:false,
}

class NumEngine{
    constructor(num,config=initialConfig){
        this.num = num;
        this.config = config;
        this.state = {};
    }

    setConfiguration(configName,value){
        this.config[configName] = value;
    }

    getConfiguration(configName){
        return this.config[configName];
    }

    mean(){
        let mean = new Mean(this.num);
        return mean.exec();
    }

    sort(){
        if(this.getConfiguration("sorted") == false){
            let sort = new Sort(this.num);

            //set sorted config true
            this.setConfiguration("sorted",true);

            return sort.exec(); // return sorted list
        }
        return this.num; //already sorted list
    }

    reverseSort(){
        let reverseSort = new ReverseSort(this.num);
        return reverseSort.exec();
    }

    median(){
        if(this.getConfiguration("sorted") == false){
            // if not sorted, sort
            this.sort();
        }
        let median = new Median(this.num);
        return median.exec();
    }

    generateRandomInt(lowerLimit,upperLimit){
        let generator = new Generator()
        return generator.generateInt(lowerLimit,upperLimit)
    }

    generateRandomFloat(lowerLimit,upperLimit){
        let generator = new Generator();
        return generator.generateFloat(lowerLimit,upperLimit);
    }

    generateRandomFloatArray(count,lowerLimit,upperLimit){
        let floatGenerator = new RandomFloatGenerator();
        return floatGenerator.generate(count,lowerLimit,upperLimit);
    }

    generateRandomIntArray(count,lowerLimit,upperLimit){
        let intGenerator = new RandomIntegerGenerator();
        return intGenerator.generate(count,lowerLimit,upperLimit);
    }
}

module.exports = NumEngine;