var screenCal = '0';
var total = 0;
function clearScreen(){
    screenCal = 0;
    total = 0;
    updateScreen();
}

function updateScreen(){
    document.getElementById('screen').innerText = screenCal;
}

function deleteLastNum(){
    screenCal = screenCal.toString();
    if (screenCal.length == 1) {
        clearScreen();
    }else{
        screenCal = screenCal.slice(0,-1);
        updateScreen();
    }
}

function displayNum(num){

    if (screenCal == 0) {
        document.getElementById('screen').innerText = num;
        screenCal = num;
    }else{
        screenCal = screenCal + num;
        updateScreen();
    }

}

function operacion(){

    
    var num1 = parseInt(screenCal);

    if (total == 0) {
        total = num1;    
        updateScreen();
    }else{
        total = total / num1;
        document.getElementById('screen').innerText = total;
    }

    screenCal = 0;
    
    
    console.log(num1);
    console.log(total);
    /* num1 + num2; */
}