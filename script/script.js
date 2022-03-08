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
    }else if(valueCi.value === 'C9' || valueCi.value === 'c#9'){
        res.innerHTML = 'Dó com nona'
    }else if(valueCi.value === 'Cm9' || valueCi.value === 'cm9'){
        res.innerHTML = 'Dó menor com nona'
    }else if(valueCi.value === 'C#9' || valueCi.value === 'C#9'){
        res.innerHTML = 'Dó sustenido com nona'
    }else if(valueCi.value === 'C#m9' || valueCi.value === 'c#m9'){
        res.innerHTML = 'Dó sustenido menor com nona'
    }else if(valueCi.value === 'Cb9' || valueCi.value === 'cb9'){
        res.innerHTML = 'Dó bemol com nona'
    }else if(valueCi.value === 'Cbm9' || valueCi.value === 'cbm'){
        res.innerHTML = 'Dó bemol menor com nona'
    }else if(valueCi.value === 'D#9' || valueCi.value === 'd#9'){
        res.innerHTML = 'Ré sustenido com nona'
    }else if(valueCi.value === 'D#m9' || valueCi.value === 'd#m9'){
        res.innerHTML = 'Ré sustenido menor com nona'
    }else if(valueCi.value === 'D9' || valueCi.value === 'd9'){
        res.innerHTML = 'Ré com nona'
    }
    else if(valueCi.value === 'Dm9' || valueCi.value === 'dm9'){
        res.innerHTML = 'Ré menor com nona'
    }else if(valueCi.value === 'Db9' || valueCi.value === 'db9'){
        res.innerHTML = 'Ré bemol com nona'
    }else if(valueCi.value === 'Dbm9' || valueCi.value === 'Dbm9'){
        res.innerHTML = 'Ré bemol menor com nona';
    }else if(valueCi.value === 'E9' || valueCi.value === 'e9'){
        res.innerHTML = 'Mi com nona'
    }else if(valueCi.value === 'Em9' || valueCi.value === 'em9'){
        res.innerHTML = 'Mi menor com nona'
    }else if(valueCi.value === 'E#m9' || valueCi.value === 'e#m9'){
        res.innerHTML = 'Mi sustenido menor com nona';
    }else if(valueCi.value === 'Eb9' || valueCi.value === 'eb9'){
        res.innerHTML = 'Mi bemol com nona'
    }else if(valueCi.value === 'Ebm9' || valueCi.value === 'ebm9'){
        res.innerHTML = 'Mi bemol menor com nona'
    }else if(valueCi.value === 'F9' || valueCi.value === 'f9'){
        res.innerHTML = 'Fá com nona'
    }else if(valueCi.value === 'F#9' || valueCi.value === 'f#9'){
        res.innerHTML = 'Fá sustenido com nona'
    }else if(valueCi.value === 'F#m9' || valueCi.value === 'f#m9'){
        res.innerHTML = 'Fá sustenido menor com nona'
    }else if(valueCi.value === 'Fm9' || valueCi.value === 'fm9'){
        res.innerHTML = 'Fá menor com nona'
    }else if(valueCi.value === 'Fb9' || valueCi.value === 'fb9'){
        res.innerHTML = 'Fá bemol com nona'
    }else if(valueCi.value === 'Fbm9' || valueCi.value === 'fbm9'){
        res.innerHTML = 'Fá bemol menor com nona'
    }else if(valueCi.value === 'G9' || valueCi.value === 'g9'){
        res.innerHTML = 'Sol com nona'
    }else if(valueCi.value === 'Gm9' || valueCi.value === 'gm9'){
        res.innerHTML = 'Sol menor com nona'
    }else if(valueCi.value === 'G#9' || valueCi.value === 'g#9'){
        res.innerHTML = 'Sol sustenido com nona'
    }else if(valueCi.value === 'G#m9' || valueCi.value === 'gm9'){
        res.innerHTML = 'Sol sustenido menor com nona'
    }else if(valueCi.value === 'Gb9' || valueCi.value === 'gb9'){
        res.innerHTML = 'Sol bemol com nona'
    }else if(valueCi.value === 'Gbm9' || valueCi.value === 'gbm9'){
        res.innerHTML = 'Sol bemol menor com nona'
    }else if(valueCi.value === 'A9' || valueCi.value === 'a9'){
        res.innerHTML = 'Lá com nona'
    }else if(valueCi.value === 'Am9' || valueCi.value === 'am9'){
        res.innerHTML = 'Lá menor com nona'
    }else if(valueCi.value === 'A#9' || valueCi.value === 'a#9'){
        res.innerHTML = 'Lá sustenido com nona'
    }else if(valueCi.value === 'A#m9' || valueCi.value === 'a#m9'){
        res.innerHTML = 'Lá sustenido menor com nona'
    }else if(valueCi.value === 'Ab9' || valueCi.value === 'ab9'){
        res.innerHTML = 'Lá bemol com nona'
    }else if(valueCi.value === 'Abm9' || valueCi.value === 'abm9'){
        res.innerHTML = 'Lá bemol menor com nona'
    }else if(valueCi.value === 'B9' || valueCi.value === 'b9'){
        res.innerHTML = 'Si com nona';
    }else if(valueCi.value === 'Bm9' || valueCi.value === 'bm9'){
        res.innerHTML = 'Si menor com nona'
    }else if(valueCi.value === 'B#9' || valueCi.value === 'b#9'){
        res.innerHTML = 'Si sustenido com nona'
    }else if(valueCi.value === 'B#m9' || valueCi.value === 'b#m9'){
        res.innerHTML = 'Si sustenido menor com nona'
    }
    else{
        res.innerHTML = 'Error'
    }
}
