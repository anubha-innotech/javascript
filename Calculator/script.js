let string = "";
let calc = null;
let numbers = document.querySelectorAll('.number');
let operatorIndex = new Array();
let numberIndex = new Array();
let operators = document.querySelectorAll('.operator');
let clear = document.querySelector('#clear')
let input = document.querySelector('.input');
let result = document.querySelector('#result');
let backspace = document.querySelector('#backspace');
let equals = document.querySelector('.equals')
// count for numbers of operators in expression 
let count = 0;

// Operators Click Event Handler 
Array.from(operators).forEach(operator => {
    operator.addEventListener('click', (e) => {
        stringArr = string.split("")
        lastChar = stringArr[stringArr.length - 1]
        // prevents multiple operator issue
        if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
            stringArr[stringArr.length - 1] = e.target.value;
            count += 1;
        }
        else if (lastChar != "+" || lastChar != "-" || lastChar != "*") {
            stringArr[stringArr.length] = e.target.value;
            count += 1;
        }
        string = stringArr.join("");
        input.value = string;
    })
})

// Numbers Click Event Handler 
Array.from(numbers).forEach(number => {
    number.addEventListener('click', (e) => {
        string += e.target.value;
        input.value = string;
    })
});

// Clear Click Event Handler
clear.addEventListener('click',function clear() {
    string = "";
    input.value = "";
    result.innerHTML = "";
})

// Backspace Click Event Handler 
backspace.addEventListener('click',()=>{
    let slicedString = string.slice(0,-1);
    input.value = slicedString;
    string = slicedString;
})

// Equal to Click Event Handler
equals.addEventListener('click', (e) => {
    /*To check that last char isn't an operator when equals to is clicked*/
    if (string.charAt(string.length - 1) != '+' && string.charAt(string.length - 1) != '-' && string.charAt(string.length - 1) != '*' && string.charAt(string.length - 1) != '/') {    
    let stringArr = string.split(/(\+|\-|\*|\/)/);
    console.log(stringArr);
            for(i=0;i<=stringArr.length;i++){
                // console.log("index before if" + i);
            if (stringArr[i] == "/") {
                // console.log("my indes" +i )
                calc = stringArr[i - 1] / stringArr[i + 1]
                stringArr.splice(i - 1, 0, calc);
                stringArr.splice(i, 3)
                // console.log(stringArr);
                i-=1;
            }
        }
            for(i=0;i<=stringArr.length;i++){
                // console.log("index before if" + i);
            if (stringArr[i] == '*') {
                // console.log("my indes" +i )
                calc = stringArr[i - 1] * stringArr[i + 1]
                stringArr.splice(i - 1, 0, calc);
                stringArr.splice(i, 3)
                console.log(stringArr);
                i-=1;
            }
        }
        for(i=0;i<=stringArr.length;i++){
            // console.log("index before if" + i);
        if (stringArr[i] == '-') {
            // console.log("my indes" +i )
            calc = stringArr[i - 1] - stringArr[i + 1]
            stringArr.splice(i - 1, 0, calc);
            stringArr.splice(i, 3)
            console.log(stringArr);
            i-=1;
        }
    }
            for(i=0;i<=stringArr.length;i++){
                // console.log("index before if" + i);
            if (stringArr[i] == '+') {
                // console.log("my indes" +i )
                calc = Number(stringArr[i - 1]) + Number(stringArr[i + 1])
                stringArr.splice(i - 1, 0, calc);
                stringArr.splice(i, 3)
                console.log(stringArr);
                i-=1;
            }
        }
        console.log("Result: "+calc);
        result.innerHTML = calc;
    }

})




