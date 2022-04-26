function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray = [1, 30, 34, 45, 90, 3, 5, 7, 8]

console.log(filtraPares(meuArray))