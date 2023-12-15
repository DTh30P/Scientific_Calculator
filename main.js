const precedenceOf = {
    "!": 4,
  
    "*": 3,
    "/": 3,
    "%": 3,
  
    "+": 2,
    "-": 2,
  
    "=": 1
  };


function showResults(results) {

    return results.toString()
}

function readInput(str=document.getElementById("text_calculation").value) {
    var str = str;
    return str
}

function tokenize(str){
    const regex =   /[0-9]*\.?[0-9]+|[-+*/()]|[a-z]+/g  //regex seperates different tokens
    if(str.match(regex) !== null) return  str.match(regex)
    else  return null
}



function shuntingYard(tokens){
    var operatorStack = []
    var outputQueue = []

    /**shunting yard algorithm
        1.  While there are tokens to be read:
        2.        Read a token
        3.        If it's a number add it to queue
        4.        If it's an operator
        5.               While there's an operator on the top of the stack with greater precedence:
        6.                       Pop operators from the stack onto the output queue
        7.               Push the current operator onto the stack
        8.        If it's a left bracket push it onto the stack
        9.        If it's a right bracket 
        10.            While there's not a left bracket at the top of the stack:
        11.                     Pop operators from the stack onto the output queue.
        12.             Pop the left bracket from the stack and discard it
        13. While there are operators on the stack, pop them to the queue
     **/

    var token;




    for(let i = 0; i < tokens.length; i++)
    {
        token = tokens[i];

        if(!isNaN(token))
        console.log("float found "+ token)

        else if(token=='(')
        console.log("left bracket found"+ token)

        else if(token==')')
        console.log("Right bracket found"+ token)

        else if(token=='+')
        console.log("Addition found"+ token)

        else if(token=='-')
        console.log("subtraction found"+ token)
        
        else if(token=='*')
        console.log("multiply found"+ token)

        else if(token=='/')
        console.log("division found"+ token)

        else if(token=='^')
        console.log("power found"+ token)

        else if(token=='sin')
        console.log("sin found"+ token)

        else if(token=='cos')
        console.log("cos found"+ token)

        else if(token=='tan')
        console.log("tan found"+ token)

        else if(token=='log')
        console.log("log found"+ token)

        else
        console.log("invalid input "+ token)

    }


}
var str= ".tan2.345+tancos(sin(-68.567))-8/8"

shuntingYard(tokenize(str))

