function somaNumero(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    });
}

const arr =[2, 3];
console.log(somaNumero(arr))