

const first = { x: 2, y: 3};
const second = { a: 70, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };

var extend = (...arguments)=> {
    var e = {};
    var m = (obj) => {
            for (let x in obj) {
                
               if (obj.hasOwnProperty(x)) {
                if(obj.hasOwnProperty(x)!==e.hasOwnProperty(x)){
                    e[x] = obj[x];}
                    }
               
            }
        };
        for (var i = 0; i < arguments.length; i++) {
        try {
        if(typeof arguments[i]!== 'object' || typeof arguments[i] === 'undefined'){ return "IT is not obj";}
        else { 
                if(arguments.length<2){
                 console.log(arguments.length);
                
                            return "Only One OBJ";
                                        }
                            else {
                               
                                     m(arguments[i]);}
                                                }
                }catch(e){
        console.log("errr");
            }
        }
    return e;
    }
 /*   
const firstSecondThird = extend(first, second, third); 
console.log(firstSecondThird );  // { x: 2, y: 3, a: 70, z: 5, q: 10 }

const secondThird = extend(second, third);  
console.log( secondThird) ; // { a: 70, x: 4, z: 5, y: 9, q: 10 } 

const thirdFirstSecond = extend(third, first, second); 
console.log(thirdFirstSecond)  ;// { x: 0, y: 9, q: 10, a: 70, z: 5 }*/



 
let smush = (...arguments)=> {
var e = {};
var m = (obj) => {
		for (let x in obj) {
			if (obj.hasOwnProperty(x)) {
			    e[x] = obj[x];
                }
		}
    };
    for (var i = 0; i < arguments.length; i++) {
    try {
    if(typeof arguments[i]!== 'object' || typeof arguments[i] === 'undefined'){ return "IT is not obj";}
    else { 
            if(arguments.length<2){
            return "Only One OBJ";
            }else {
                m(arguments[i]);}
        }
    }catch(e){
    console.log(e);
        }
    }
return e;
}
/*
const firstSecondThird1 = smush(first, second, third); // { x: 0, y: 9, a: 70, z: 5, q: 10 }
console.log(firstSecondThird1);

const secondThird1 = smush(second, third); // { a: 70, x: 0, z: 5, y: 9, q: 10 }
console.log(secondThird1);

const thirdFirstSecond1= smush(third, first, second); // { x: 4, y: 3, q: 10, a: 70, z: 5 }
console.log(thirdFirstSecond1);*/

function mapValues(object, func)
 {
  try{
    if(typeof object!== 'object'){ return "IT is not obj";}
    else { 
          if(typeof func!=='function'){return "Enter A function"}
          else {
            return Object.keys(object).reduce(function(result, key) {
                                                             result[key] = func(object[key])
                                                             return result}, {})
                }
        }
} catch(e){
    console.error(e);}
}

  
 //console.log(mapValues({ a: 1, b: 2, c: 3 }, function(value) {return value +1;}));
module.exports = {
    extend,
    smush,
    mapValues
}