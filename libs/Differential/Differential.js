class Differential{
    static differ(f){
        var h = 0.001;
        return function(x) { return (f(x + h) - f(x - h)) / (2 * h); };
    }
}

module.exports = Differential;