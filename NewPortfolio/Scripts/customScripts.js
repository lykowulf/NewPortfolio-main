//find the min of the numbers entered

function calcMin() {
    //get input from the user. use number function to convert string to number
    let firstNum = Number(document.getElementById("num1").value);
    let secondNum = Number(document.getElementById("num2").value);
    let thirdNum = Number(document.getElementById("num3").value);
    let forthNum = Number(document.getElementById("num4").value);
    let fifthNum = Number(document.getElementById("num5").value);
    //calculates the min of numbers entered
    let results = Math.min(firstNum, secondNum, thirdNum, forthNum, fifthNum);

    document.getElementById("results").innerHTML = results;
}
//fom the max of the numbers entered
function calcMax() {
    let firstNum = Number(document.getElementById("number1").value);
    let secondNum = Number(document.getElementById("number2").value);
    let thirdNum = Number(document.getElementById("number3").value);
    let forthNum = Number(document.getElementById("number4").value);
    let fifthNum = Number(document.getElementById("number5").value);
    let results1 = Math.max(firstNum, secondNum, thirdNum, forthNum, fifthNum);

    document.getElementById("results1").innerHTML = results1;
}

//find the mean of 5 numbers
function calcMean() {
    let a = Number(document.getElementById("mean1").value);
    let b = Number(document.getElementById("mean2").value);
    let c = Number(document.getElementById("mean3").value);
    let d = Number(document.getElementById("mean4").value);
    let e = Number(document.getElementById("mean5").value);
    let mean = ((a + b + c + d + e) / 2);

    document.getElementById("average").innerHTML = mean;
}


//find the sum of 5 numbers


function sum() {
let addNumber1 = Number(document.getElementById("add1").value);
let addNumber2 = Number(document.getElementById("add2").value);
let addNumber3 = Number(document.getElementById("add3").value);
let addNumber4= Number(document.getElementById("add4").value);
let addNumber5 = Number(document.getElementById("add5").value);
//calculates the sum of numbers entered
let sum = (addNumber1 + addNumber2 + addNumber3 + addNumber4 + addNumber5);

document.getElementById("sum").innerHTML = sum;
}

function product() {
    let product1 = parseFloat(document.getElementById("times1").value);
    let product2 = parseFloat(document.getElementById("times2").value);
    let product3 = parseFloat(document.getElementById("times3").value);
    let product4 = parseFloat(document.getElementById("times4").value);
    let product5 = parseFloat(document.getElementById("times5").value);
    //calculates the sum of numbers entered
    let multi = (product1 * product2 * product3 * product4 * product5);

    document.getElementById("multi").innerHTML = multi;
}


//web dev simplified




