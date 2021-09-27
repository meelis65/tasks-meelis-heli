function randomize(n){
    let numbers=[]
    for (let i =0;i<n;i++){
        numbers.push(Math.floor((Math.random()*100)+1))
    }
    return numbers
}

function max(arr){
    return Math.max(...arr)
}

function min(arr){
    return Math.min(...arr)
}

function even(arr){
    const bool = []
    for (let i =0;i<arr.lenght;i++){
        if(arr[i]%2===0){
            bool.push(true)
        }
    }
    return bool.lengt
}

const numbers = randomize(5)
console.log(numbers)

const maxNumber = max(numbers)
console.log(maxNumber)

const minNumber = min(numbers)
console.log(minNumber)

const evenNumber = even(numbers)
console.log(evenNumber)