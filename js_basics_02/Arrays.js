const Arr1 = [5,6,7,8,9];

console.log(Arr1);

const Devs = new Array("Ram","Laksham","Hanuman","Bharat");
console.log(Devs);

 console.log(Devs.push("Shivji")); //add to the last and returns new length 
 console.log(Devs);
 

console.log(Devs.pop()); //returns the removed element from last 

// // Opposite 
console.log(Devs.shift()); //start operation 
console.log(Devs);

console.log(Devs.unshift("Bhole")); //start operation 
 console.log(Devs);
 
console.log(Devs.includes("Vishnu")); //return boolean 

// to convert array into string 
const stringArr = Devs.join()
console.log(stringArr);

// slice and splice 

console.log(Devs.slice(1,3));
//  // it excludes 3rd index  AND GIVE THE ORIGINAL ARRAY AS IT IS 
 console.log(Devs);
 

 console.log(Devs.splice(1,3));
//  //includes both indx AND GIVE THE ORIGINAL ARRAY EXCLUDING THE RANGE ENTITIES 
console.log(Devs);


 //But the major difference it shown in origial array 
 
//concat opertion 
console.log( Arr1.concat(Devs));

// Arrayof method 
console.log(Array.of(Arr1, Devs));



// //Spread operation requires new array 
const NewArr = [...Arr1,...Devs]
console.log(NewArr);

const MixedArr = [5,9,6,3,[2,0,1,4]]

console.log(MixedArr.flat(2)); 











