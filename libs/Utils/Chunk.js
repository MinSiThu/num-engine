let Utility = require("./Utility");

class Chunk extends Utility{
    constructor(numbers){
        super(numbers);
    }

    //override
    help(chunkSize){
        let matrix = [];
        let Counter = -1;

        for(let i=0;i<this.numbers.length;i++){
            if(i % chunkSize == 0){
                Counter++;
                matrix[Counter] = []; 
            }
            matrix[Counter].push(this.numbers[i]);
        }

        return matrix;
    }
}

module.exports = Chunk;