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
    }else if(valueCi.value === 'Cm' || valueCi.value === 'cm'){
        res.innerHTML = 'Dó menor'

    }
    else if(valueCi.value === 'C#m' || valueCi.value === 'c#m'){
        res.innerHTML = 'Dó sustenido menor';
    }
    else if(valueCi.value === 'Cbm' || valueCi.value === 'cbm'){
        res.innerHTML = 'Dó Bemol menor'
    }else if(valueCi.value === 'Dm' || valueCi.value === 'dm'){
        res.innerHTML = 'ré menor'
    }else if(valueCi.value === 'D#m' || valueCi.value === 'd#m'){
        res.innerHTML = 'ré sustenido menor';
    }
    else if(valueCi.value === 'Dbm' || valueCi.value === 'Dbm'){
        res.innerHTML = 'Ré Bemol menor'
    }
    else if(valueCi.value === 'Ebm' || valueCi.value === 'ebm'){
        res.innerHTML = 'Mi Bemol menor';
    }
    else if(valueCi.value === 'Em' || valueCi.value === 'em'){
        res.innerHTML = 'Mi menor'
    }
    else if(valueCi.value === 'Fm' || valueCi.value === 'fm'){
        res.innerHTML = 'Fá menor';
    }
    else if(valueCi.value === 'F#m' || valueCi.value === 'f#m'){
        res.innerHTML = 'Fá sustenido menor'
    }else if(valueCi.value === 'Fbm' || valueCi.value === 'fbm'){
        res.innerHTML = 'Fá bemol menor'
    }
    else if(valueCi.value === 'Gm' || valueCi.value === 'gm'){
        res.innerHTML = 'Sol menor'
    }
    else if(valueCi.value === 'G#m' || valueCi.value === 'g#m'){
        res.innerHTML = 'Sol sustenido menor';
    }else if(valueCi.value === 'Gbm' || valueCi.value === 'gbm'){
        res.innerHTML = 'Sol bemol menor';
    }
    else if(valueCi.value === 'Am' || valueCi.value === 'am'){
        res.innerHTML = 'Lá menor'
    }else if(valueCi.value === 'A#m' || valueCi.value === 'a#m'){
        res.innerHTML = 'Lá sustenido menor';
    }
    else if(valueCi.value === 'Abm' || valueCi.value === 'abm'){
        res.innerHTML = 'Lá bemol menor';
    }
    else if(valueCi.value === 'Bm' || valueCi.value === 'bm'){
        res.innerHTML = 'Si menor'
    }else if(valueCi.value === 'B#m' || valueCi.value === 'b#m'){
        res.innerHTML = 'Si sustenido menor';

    }else if(valueCi.value === 'Bbm' || valueCi.value === 'bbm'){
        res.innerHTML = 'Si bemol menor'
    }else if(valueCi.value === 'E#m' || valueCi.value === 'e#m'){
        res.innerHTML = 'Mi sustenido menor'
    }
    else{
        res.innerHTML = 'Error'
    }
}
