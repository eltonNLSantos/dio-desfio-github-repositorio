function validaArray(arr, num){
    //utilizando a declaração try...catch
    try{
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros"); //Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object"); //Se o array não for dotipo object, lance um error do tipo TypeError

        if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo number"); ////Se o array não for dotipo number, lance um error do tipo TypeError

        if(arr.length !== num) throw new RangeError ("Tamanho Inválido");  //Se o tamanho do array for diferente do número enviado como parâmetros, lance um erro do tipo RangeError

        return arr;
        //Filtre as chamadas de catch por cada tipo de erro utilizado o operador Instanceof
    }catch (e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }else  if(e instanceof TypeError){
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }else  if(e instanceof RangeError){
            console.log("Este erro é um ReferenceError");
            console.log(e.message);
        }else{
            console.log("Tipo de erro não esperado: " + e);
        }

    }


}
console.log(validaArray([1, 2, 3, 4, 5, 6], 6));
