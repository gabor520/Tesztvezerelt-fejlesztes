$(function() {});

function fizbuz(n){
    if(n === 0){
        return "";
    } else {
    let txt=""
    for (let index = 1; index < n; index++) {
        txt += fizzbuzzErtek(index)+ ", ";
    }
    if (n%3 === 0){
        txt+="fizz";
    } else {   
        txt+=index +", ";
        }   
    }
    
    return txt;
    }

function fizzbuzzErtek(){
    /**egyetle szám visszatérési éréket adja meg*/ 
    if (index%3 === 0){
        txt+=index +"fizz";
    } else {   
        ertek = x;
        } 
        return ertek;
    }

