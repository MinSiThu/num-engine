let Formula = require("./Formula");

class Shuffle extends Formula{
    constructor(numbers){
        super();
        this.numbers = numbers;
    }

    //override
    exec(){
        var currentIndex = this.numbers.length, temp, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temp = this.numbers[currentIndex];
            this.numbers[currentIndex] = this.numbers[randomIndex];
            this.numbers[randomIndex] = temp;
        }
        return this.numbers;
    }
}

module.exports = Shuffle;