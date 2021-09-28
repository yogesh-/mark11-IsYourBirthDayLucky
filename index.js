const date = document.querySelector("#date-input");
const userNumber = document.querySelector("#number-entered");
const checkNum = document.querySelector("#check-number");
const display = document.querySelector("#display-message");


checkNum.addEventListener("click",calculateIfLucky);

function calculateIfLucky(){
    console.log(date.value);
    const DOB = (date.value);
    const numb = userNumber.value;
    const sum = calculateSum(DOB);
    getMessage(sum,numb);

}

function calculateSum(DOB){
    DOB = DOB.replaceAll("-","");
    console.log(DOB);
    let sum = 0;
    for (i=0;i<DOB.length;i++){
        sum = sum +  Number(DOB.charAt(i));
    }
    return Number(sum);
}

function getMessage(sum,numb){
    console.log(sum,numb);
    // if(numb ==="" || DOB ===""){
    //     display.innerText="ERROR!! Enter all the details to proceed.";
    // }
    if(sum%numb===0){
        display.innerText="You are a lucky chap";
    }
    
    else{
        display.innerText="Your birthdate is not lucky";
    }
}