

function head(array){
    try{
            if(!Array.isArray(array)){ throw new TypeError;}
    
     } catch(TypeError){console.log("Not a array Type");}
    
     try{
            if(array.length <0 ) {return "Empty array";}
            else{
                return array[0];
            }
        
        }catch(e){console.error("Empty")}
    return '';}
    /*console.log(head([1, 2, 3])); // Returns: 1
    console.log(head([])); // throws an error
    console.log(head("banana")); // throws an error
    console.log(head()); // throws an error*/
    
    
function last(array){
        try{
            if(!Array.isArray(array)){ throw new TypeError;}
    
     } catch(TypeError){console.log("Not a array Type");}
    
     try{
            if(array.length <0 ) {return "Empty array";}
            else{
                return array[array.length-1];
            }
        
        }catch(e){console.error("Empty")}
    return '';}
    console.log(last([1, 2, 3])); // Returns: 3
    

function remove(array,index){
        try{
            if(array.length < 0 || !Array.isArray(array)){
                throw new TypeError;
            } 
        
        
            else {
                if(index < array.length ){
                array.splice(index,1);
                return array;
        } else return "Index is out of Bound";
            }
        }catch(TypeError){console.error("Proper Array Does not exist");}
        return '';
        }
          
        /*console.log(remove("komal",1)); // Proper Array Does not exist
        console.log(remove([5, 6, 7], 1)); // Returns: [5, 7]
        console.log(remove([1,2,3,4],5)); // Index is out of Bound*/
        
        
        function range(end,value){

            try{if(typeof end !=='number'){ throw new TypeError;}
            else{
                if(end<0){ return " enter a positive number";}else {
                        if(typeof value==='undefined')
            {return [...Array(end).keys()];
            }else 
            {
                return Array(end).fill(value)}
            }
        
        }
            }catch(TypeError){console.error("Not proper type");}
        return '';
        }
        
        /*console.log(range(5,"Hi"));//[ 'Hi', 'Hi', 'Hi', 'Hi', 'Hi' ]
        console.log(range(3));//[ 0, 1, 2 ]
        console.log(range(-3))// enter a positive number
        console.log(range("Komal","Hi"));//Not proper type*/
        
                
    function countElements(array){
       
        try{
            if(!Array.isArray(array)){ throw new TypeError;}

            else{var counts = {};
        
            for (var i = 0; i < array.length; i++) {
              var x = array[i];
              counts[x] = counts[x] ? counts[x] + 1 : 1;
            }
            
           return counts;}
    
     } catch(TypeError){console.log("Not a array Type");}
    
        
    }
        console.log(countElements([13, '13', 13, 'hello', true, true]));
    
    
function isEqual(arrayOne,arrayTwo){
    if(!Array.isArray(arrayOne)|| !Array.isArray(arrayTwo))
              {return "Not a valid array";}
             
                else {
                        if(arrayOne.length!=arrayTwo.length) 
                        {return "False"; }
                        else
                        { for(var i=0;i<arrayOne.length;i++) 
                          if(arrayOne[i]!=arrayTwo[i]) 
                            { return "False"; } 
                        return "True"; 
                        }
                    }
                }
            
    
    /*console.log(isEqual([1, 2, 3], [1, 2, 3])); // returns: true
    console.log(isEqual([1,2,3], [4, 5, 6])); // Returns: false
    console.log(isEqual([1, 3, 2], [1, 2, 3])); // Returns: false
    console.log(isEqual([1, 2],[1,2,3])); // Returns: false
    
    console.log(isEqual(123, [1, 2, 3])); //Not a Valid Array
    console.log(isEqual([1,2,3],123)); // Not a Valid Array*/
    
    


