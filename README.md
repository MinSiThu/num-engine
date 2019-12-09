# num-engine
a statistics package in javascript

- lightweight, only 5.83kb
- easy to use
- both browser & node.js
- fast and efficient

# Installation
```
npm install --save num-engine
```

```html
<script src="https://unpkg.com/num-engine@1.0.0/output/num-engine.js"></script>
```

```js
//in node.js
let NumEngine = require("num-engine");
let numEngine = new NumEngine([1,2,3,4,5]);

//in browsers
let numEngine = new NumEngine([1,2,3,4,5]);
```

# Documentation

## Quick Start

```js
let NumEngine = require("num-engine"); //browsers don't need this
let numEngine = new NumEngine([1,2,3,4,5],{
    sorted:true //default is false
}); // config object is optional
```
*{sorted:true}* should be added for sorted array arguments to improve performance.


# Methods

## sum
return the summation value of the array items
```js
let numEngine = new NumEngine([1,2,3,4,5]);
let result = numEngine.sum(); // 15
```

## product
return the product of array items
```js
let numEngine = new NumEngine([1,2,3,4,5]);
let result = numEngine.product(); 
```

## min
return the minimal value of array items
```js
let numEngine = new NumEngine([1,2,3,4,5],{sorted:true});
let result = numEngine.min(); 
```

## max 
return the maximum value of array items
```js
let numEngine = new NumEngine([1,2,3,4,5],{sorted:true});
let result = numEngine.max(); 
```

## mean
return the mean of array items
```js
let numEngine = new NumEngine([1,2,3,4,5],{sorted:true});
let result = numEngine.mean(); 
```

## gemoerticMean
return the geometric mean of array items
```js
let numEngine = new NumEngine([1,2,3,4,5]);
let result = numEngine.geometricMean(); 
```

## mode
return mode of array items
```js
let numEngine = new NumEngine([1,2,3,4,5]);
let result = numEngine.mode(); 
```

## sort
sort the current array in **ascending order** and also return the sorted array 
```js
let numEngine = new NumEngine([1,2,3,4,5]);
let result = numEngine.sort(); 
```

## reverseSort
sort the current array in **descending order** and also return the sorted array 
```js
let numEngine = new NumEngine([1,2,3,4,5]);
let result = numEngine.reverseSort(); 
```

## shuffle
shuffle the current array and also return the shuffled array
```js
let numEngine = new NumEngine([1,2,3,4,5]);
let result = numEngine.shuffle(); 
```

## median
return the median of aray items
```js
let numEngine = new NumEngine([1,2,3,4,5]);
let result = numEngine.median(); 
```

## chunk(chunkSize:*number*)
divides the array into sub arrays with **chunkSize length**
```js
let numEngine = new NumEngine([1,2,3,4,5,6]);
let result = numEngine.chunk(2);
/* result is [
            [1,2],[3,4],[5,6]
        ] 
*/
```

## **static** differentiate(f:*Function*) 
return the 1st ordered differentiated function of given function
```js
NumEngine.differentiate(function(){
    return Math.pow(2,2);
})
```

## **static** generateRandomInt(lowerLimit:*number*,upperLimit:*number*)
return a random integer
```js
NumEngine.generateRandomInt(1,10);
```

## **static** generateRandomFloat(lowerLimit:*number*,upperLimit:*number*)
return a random float number
```js
NumEngine.generateRandomFloat(1,10);
```

## **static** generateRandomIntArray(count:*number*,lowerLimit:*number*,upperLimit:*number*)
return a random integer number array
```js
NumEngine.generateRandomIntArray(5,1,10);
```

## **static** generateRandomFloatArray(count:*number*,lowerLimit:*number*,upperLimit:*number*)
return a random float number array
```js
NumEngine.generateRandomFloatArray(5,1,10);
```

## variance
return the variance of the given array
```js
let numEngine = new NumEngine([1,2,3,4,5,6]);
let result = numEngine.variance();
```

## standardDeviation
return the standard deviation of the given array
```js
let numEngine = new NumEngine([1,2,3,4,5,6]);
let result = numEngine.standardDeviation();
```

## **static** factorial(startNumber:*number*)
return the factorial value of a number
```js
NumEngine.factorial(5);
```

## extent
return the min and max value of array items
```js
let numEngine = new NumEngine([1,2,3,4,5,6]);
let result = numEngine.extent(); //[1,6]
```