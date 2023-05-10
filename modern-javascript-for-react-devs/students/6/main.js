//
// File: main.js
// Date: 5/9/203
// Imane Allay

//_______________________________________________________

//Exercice 0:  in the modern-js
//-----------------------Test-------------------------
const ex1 = () => {
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const ex2 = () => {
    const array = [12, 55, 2, 22, 11];
    console.log(minNumber(array));
}

const ex3 = () => {
    const array1 = [1, 2, 3, 4, 5];
    const array2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(interleave(array1, array2));
}

//
// Your functions here...
//

//-----------------------------Exercice1----------------
const countNumbers = (array) => {
    
    
    let c = 0;
    for (let i=0;i<array.length;i++){
        if (typeof(array[i])=='number'){
            c++;
        }   
    }return c;
    
}

//---------------------Exercice 2--------------------
const minNumber =(array) => {
    let index = 0;
    let value = array[0];
    for (let i=1; i<array.length; i++){
        if (array[i] < value) {
            value = array[i]; 
            index = i;    
        }
    }
    return value;   
}
//-------------------------Exercice 3----------------------
   const interleave=(array1,array2) =>{
    let array3 = ""; 
    for( let i=0; i<array1.length; i++){
        if(array1.length == array2.length){
          array3+=array1[i];
          array3+=array2[i];

        }
    }
    return array3;
 }
//---------------------------Main-------------------
const main = async () => {
    console.log("----------The number of numbers:-------------");
    ex1();
    console.log("----------The minimum number:-------------");
    ex2();
    console.log("----------Interleave:-------------");
    ex3();


}

main();
