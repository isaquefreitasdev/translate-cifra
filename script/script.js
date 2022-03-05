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
    else if(valueCi.value === 'A' ||  valueCi.value === 'a'){
        res.innerHTML = 'Lá'
    }
    else if(valueCi.value === 'B' || valueCi.value === 'b'){
        res.innerHTML = 'Si'
    }else if(valueCi.value === 'C#' || valueCi.value === 'c#'){
        res.innerHTML = 'Dó sustenido'
    }
    else if(valueCi.value === 'D#' || valueCi.value === 'd#'){
        res.innerHTML = 'Ré sustenido';
    }
    else if(valueCi.value === 'E#' || valueCi.value === 'e#'){
        res.innerHTML = 'Fá'
    }
    else if(valueCi.value === 'F#' || valueCi.value === 'f#'){
        res.innerHTML = 'Fá sustenido'
    }
    else if(valueCi.value === 'G#' || valueCi.value === 'g#'){
        res.innerHTML = 'Sol sustenido';
    }
    else if(valueCi.value === 'A#' || valueCi.value === 'a#'){
        res.innerHTML = 'Lá sustenido';
    }
    else if(valueCi.value === 'B#' || valueCi.value === 'b#'){
        res.innerHTML = 'Dó'
    }else if(valueCi.value === 'Db' || valueCi.value === 'db'){
        res.innerHTML = 'Ré Bemol'
    }else if(valueCi.value === 'Eb' || valueCi.value === 'Eb'){
        res.innerHTML = 'Mi Bemol'
    }else if(valueCi.value === 'Gb' || valueCi.value === 'gb'){
        res.innerHTML = 'Sol Bemol';
    }else if(valueCi.value === 'Fb' || valueCi.value === 'fb'){
        res.innerHTML = 'Fá Bemol'
    }
    else if(valueCi.value === 'Ab' || valueCi.value === 'ab'){
        res.innerHTML = 'Lá Bemol'
    }
    else if(valueCi.value === 'Bb' || valueCi.value === 'bb'){
        res.innerHTML = 'Si Bemol'
    }
    else if(valueCi.value === 'Cb' || valueCi.value === 'cb'){
        res.innerHTML = 'Dó Bemol'
    }
    else{
        res.innerHTML = 'Error'
    }
}
