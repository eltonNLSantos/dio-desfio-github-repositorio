const meuArray = [30, 30, 40, 5, 223, 3049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    
    
    return [...mySet]; //argumento spreed vai criar um array vazio e para cada elemento do set vai ser add dentro desse array
}

console.log(valoresUnicos(meuArray));