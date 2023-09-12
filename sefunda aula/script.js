
let a= 1
let b= 5
let c = 10

const resultado = a + b + c
let texto =""

switch (resultado){
    case 10:{
        texto = "Valor é 10";
        break;
    }
    case 20:{
        texto = "Valor é 20"
        break;
    }
    default:{
        texto = "Valor não é 10 nme 20"
        break;
    }
}

console.log(texto)