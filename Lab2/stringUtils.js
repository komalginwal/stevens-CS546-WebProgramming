module.exports = {
        capitalize,
        repeat
    }

function capitalize(str){
    try{
        if( typeof str!=='string'){ return "It is not a String"}
        }catch(e){ console.log(e); }

    try{
        if (str === undefined || str == null || str.length <=0){ return "Does not exist";}
    }catch(e) { console.log(e);}
    
    if(str){
            const newString = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
            return newString;
           }
    }

//console.log(captitalize('foobar')); // Returns: "Foobar"
//console.log(captitalize('FOOBAR')); // Returns: "Foobar"


function repeat(str1,num){
    var name = str1;
    try{
        if(repeat.name === undefined || repeat.name == null || repeat.name.length <=0){ throw "Does not exist";}
       }catch(e) { console.log(e);}
    
    try{
        if( typeof str1!=='string'){ return "It is not a String";}
      }catch(e){ console.log(e); }

    try{
        if(num ==null || num < 0) {return " Enter a positive number"}
       }catch(e) { console.log(e);}
    if(num === 0){return "";}
    if(num ===1){
        return str1;
      }
      else { return str1 +  repeat(str1,num-1);
       }
    }
 
//  console.log(repeat('abc', 3)); // Returns: "abcabcabc"
// console.log(repeat('abc', 1)); // Returns: "abc" 
//console.log(repeat('abc', 0)); // Returns: ""
   

function countChars(Str) {
    try{
        if(Str==null){throw 'String Does not exist';}
        else{
                    if( typeof Str!=='string'){ return "String is not proper";}
                    else{
                         var count = {};
                        for (var i = 0; i < Str.length; i++) {
                        count[Str[i]] = (count[Str[i]] || 0) + 1;}
        
            return count;}
      }
    }catch(e){ console.log(e); }
}

//console.log(countChars('Hello, the pie is in the oven');));