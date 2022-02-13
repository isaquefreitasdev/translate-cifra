let valueCi = document.getElementById('openValue');
let buttonConverter =  document.getElementById('returnN');
let res =  document.getElementById('res');
function calcNot(){
    if(valueCi.value === 'C' || valueCi.value === 'c'){
        res.innerHTML = 'Dó'
    }else if(valueCi.value === 'D' || valueCi.value === 'd'){
        res.innerHTML = 'Ré'
    }
    else if(valueCi.value === 'E'|| valueCi.value === 'e'){
        res.innerHTML = 'Mi'
    }
    else if(valueCi.value === 'F' || valueCi.value === 'f'){
        res.innerHTML = 'Fá'
    }
    else if(valueCi.value === 'G' || valueCi.value === 'g'){
        res.innerHTML = 'Sol';
    }
    else if(valueCi.value === 'A'  === 'a'){
        res.innerHTML = 'Lá'
    }
    else if(valueCi.value === 'B' === 'b'){
        res.innerHTML = 'Si'
    }else{
        res.innerHTML = 'Error'
    }
}