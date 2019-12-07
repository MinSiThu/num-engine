let Formula = require("./Formula");
let Prodcut = require("./Product");

class GeometricMean extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    //override
    exec(){
        let n = this.numbers.length;

        let product = new Prodcut(this.numbers);
        let productResult = product.exec();

        return Math.pow(productResult,(1/n));
    }
}

module.exports = GeometricMean;