const questionOne = function questionOne(arr) {
   var sum=0;
    for (var x=0;x<arr.length;x++)
    {
         sum+= Math.pow(arr[x],2) ;
    }
    return sum;
}

const questionTwo = function questionTwo(index)
{
    if(index<1) {
        return 0;
    }
    if(index<=2)
        return 1;
    else{
        return questionTwo(index-1) + questionTwo(index-2);
    }
}

const questionThree = function questionThree(text)
{
    var c = text.match(/[aeiouAEIOU]/gi);
    return c === null? 0: c.length;
}

const questionFour = function questionFour(num) {

    if(num <0)
    {
        return NaN;
        console.log("Enter a valid positive integer.");
    }
    if(num===0||num===1)  { return 1;}
    for (var x=num; x>1; x++)
        {
            return num*questionFour(num-1);
        }
}

module.exports = {

	firstName : "KOMAL",
	lastName : "GINWAL",
	studentId: "10449929",
    questionOne,
    questionTwo,
    questionThree,
    questionFour

};
