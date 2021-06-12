const word ={ 
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    programming: "The action or process of writing computer programs.",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"


};

function checkInput(inputVal){
    
    if (typeof inputVal !=="string") {
        throw ` not a string`;
    }
    }

    function lookupDefinition(str){
        var str;
       checkInput(str);
       if(word[str]!=undefined) return word[str];
       else {throw `Not Defined`;}
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
      

    function getWord(value){
        checkInput(value);
        let getWord = getKeyByValue(word, value);
        if (getWord == undefined){
            throw "Word not found"
        }
        return getWord
    }


    module.exports = {
        description: " Dictionary ",
        lookupDefinition,
        getWord
    }