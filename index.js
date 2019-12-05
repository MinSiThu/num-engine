let Mean = require("./libs/Formula/Mean");
let Median = require("./libs/Formula/Median");
let Mode = require("./libs/Formula/Mode");

let Sum = require("./libs/Formula/Sum");
let Min = require("./libs/Formula/Min");
let Max = require("./libs/Formula/Max");

let Sort = require("./libs/Formula/Sort");
let ReverseSort = require("./libs/Formula/ReverseSort");
let Shuffle = require("./libs/Formula/Shuffle");

let Generator = require("./libs/Generator/Generator");
let RandomFloatGenerator = require("./libs/Generator/RandomFloatGenerator");
let RandomIntegerGenerator = require("./libs/Generator/RandomIntegerGenerator");

let Differential = require("./libs/Differential/Differential");

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

    sum(){
        let sum = new Sum(this.num);
        return sum.exec();
    }

    min(){
        let min = new Min(this.num);
        return min.exec();
    }

    max(){
        let max = new Max(this.num);
        return max.exec();
    }

    mean(){
        let mean = new Mean(this.num);
        return mean.exec();
    }

    mode(){
        let mode = new Mode(this.num);
        return mode.exec();
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

    shuffle(){
        let shuffle = new Shuffle(this.num);
        return shuffle.exec();
    }

    median(){
        if(this.getConfiguration("sorted") == false){
            // if not sorted, sort
            this.sort();
        }
        let median = new Median(this.num);
        return median.exec();
    }

    static differentiate(f){
        return Differential.differ(f);
    }

    static generateRandomInt(lowerLimit,upperLimit){
        let generator = new Generator()
        return generator.generateInt(lowerLimit,upperLimit)
    }

    static generateRandomFloat(lowerLimit,upperLimit){
        let generator = new Generator();
        return generator.generateFloat(lowerLimit,upperLimit);
    }

    static generateRandomFloatArray(count,lowerLimit,upperLimit){
        let floatGenerator = new RandomFloatGenerator();
        return floatGenerator.generate(count,lowerLimit,upperLimit);
    }

    static generateRandomIntArray(count,lowerLimit,upperLimit){
        let intGenerator = new RandomIntegerGenerator();
        return intGenerator.generate(count,lowerLimit,upperLimit);
    }
}

module.exports = NumEngine;