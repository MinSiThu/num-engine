let Mean = require("./libs/Formula/Mean");
let GeometricMean = require("./libs/Formula/GeometricMean");
let Median = require("./libs/Formula/Median");
let Mode = require("./libs/Formula/Mode");

let Product = require("./libs/Formula/Product");
let Sum = require("./libs/Formula/Sum");
let Min = require("./libs/Formula/Min");
let Max = require("./libs/Formula/Max");
let Variance = require("./libs/Formula/Variance");
let StandardDeviation = require("./libs/Formula/StandardDeviation");

let Sort = require("./libs/Formula/Sort");
let ReverseSort = require("./libs/Formula/ReverseSort");
let Shuffle = require("./libs/Formula/Shuffle");

let Generator = require("./libs/Generator/Generator");
let RandomFloatGenerator = require("./libs/Generator/RandomFloatGenerator");
let RandomIntegerGenerator = require("./libs/Generator/RandomIntegerGenerator");
let Factorial =  require("./libs/Generator/Factorial");

let Differential = require("./libs/Differential/Differential");

let Chunk = require("./libs/Utils/Chunk");
let Extent = require("./libs/Utils/Extent");

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

    prodcut(){
        let product = new Product(this.num);
        return this.prodcut.exec();
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

    geometricMean(){
        let geometricMean = new GeometricMean(this.num);
        return geometricMean.exec();
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

    chunk(chunkSize){
        let chunk = new Chunk(this.num);
        return chunk.help(chunkSize);
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

    variance(){
        let variance = new Variance(this.num);
        return variance.exec(Mean);
    }

    standardDeviation(){
        let standardDeviation = new StandardDeviation(this.num);
        return standardDeviation.exec(Mean,Variance);
    }

    static factorial(startNumber){
        let factorial = new Factorial();
        return factorial.generate(startNumber);
    }

    extent(){
        let extent = new Extent(this.num);
        return extent.help(Min,Max);
    }
}

module.exports = NumEngine;