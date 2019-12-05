class Generator{
    generate(){}

    //include both lower and upperLimit
    generateInt(lowerLimit=0,upperLimit=1){
        return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) ) + lowerLimit;
    }

    //include both lower and upperLimit
    generateFloat(lowerLimit=0,upperLimit=1){
        return (Math.random() * (upperLimit - lowerLimit + 1) ) + lowerLimit;
    }
}

module.exports = Generator;