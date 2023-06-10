const color =document.querySelector('#color');
const board = document.querySelector('.board');
const no_of_squer = document.querySelector('#range');
const no = document.querySelector('.no');
const rndColor = document.querySelector('.random_color')
const erese = document.querySelector('.ereser')
const clear = document.querySelector('.reset')

let bgColor = '#000000';
let isPressed = false;

const hx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];



rndColor.onclick = () =>{
    let hexDigits = '#'
    for (let i = 0; i < 7; i++){
        hexDigits += hx[rndHexDigit];
    }
    bgColor = hexDigits();
}

function rndHexDigit(){
    let rnd = math.floor(Math.random() * hx.length);
    return rnd;
}

no_of_squer.addEventListener('input',()=>{
    let no_s_of_squer = no_of_squer.value;
    board.innerHTML = '';
    board.removeAttribute('style');
    board.setAttribute('style',`--squer_no:${no_s_of_squer}`);
    

    no.textContent = no_s_of_squer;
    
    for( let i = 0; i <= no_s_of_squer * no_s_of_squer; i++ ){
    const innerDiv = document.createElement('div');
    innerDiv.setAttribute( 'class', 'board_squer' );
    board.appendChild( innerDiv );
    };
});
board.addEventListener( 'mousedown',()=>{

isPressed = true;

});

board.addEventListener( 'mouseup',()=>{

    isPressed = false;
    
    });

board.onmouseover = (e) => {
    if( isPressed){
        console.log(e);
        e.target.style.backgroundColor = 'red';
    }else return false;
       

};
window.addEventListener('load',()=>{board.setAttribute('style',`--squer_no:${no_of_squer.value}`);
});