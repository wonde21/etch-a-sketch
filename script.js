window.addEventListener('load',()=>{
    
    board.setAttribute('style','--square_no:21');
    square_draw(21);
});


const color =document.querySelector('#color-input');
const color_mode_btn =document.querySelector('.color');
const board = document.querySelector('.board');
const no_of_square = document.querySelector('#range');
const no = document.querySelector('.no');
const rndColor = document.querySelector('.random_color')
const erase = document.querySelector('.eraser')
const clear = document.querySelector('.reset')

let isPressed = false;
let square_exist =false;
let random =false;
let isErase = false;
const hx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

// color input

color.addEventListener('input', function(){
    pen_color = color.value;
});

color_mode_btn.onclick = () =>{
    random = false;
    isErase = false;
};
    // board clear

clear.addEventListener('click', function(){
    if(square_exist){
       const  inner_square = document.querySelectorAll('.board_square');
        inner_square.forEach(sqr => {
            sqr.style.backgroundColor ='unset';
        });
    }    
        });

        // Random color

rndColor.onclick = () =>{
   random = true;
   isErase = false;
}

erase.onclick = () =>{
    isErase = true;
    
};

no_of_square.addEventListener('input',()=>{
    let no_s_of_square = no_of_square.value;
    board.innerHTML = '';
    board.removeAttribute('style');
    board.setAttribute('style',`--square_no:${no_s_of_square}`);
    

    no.textContent = no_s_of_square;
    
    square_draw(no_s_of_square);

    square_exist = true;

});

function random_color() {
    let hexDigits = '#';
    for (let i = 0; i < 6; i++) {
        let rnd = Math.floor(Math.random() * hx.length);
        hexDigits += hx[rnd];
    }
    return hexDigits;
}

function square_draw(number){
    for( let i = 0; i <= number * number; i++ ){
        const innerDiv = document.createElement('div');
        innerDiv.setAttribute( 'class', 'board_square' );
        board.appendChild( innerDiv );
        };
}
board.addEventListener('mousedown',(e)=>{
    e.preventDefault();
    isPressed = true;
    
});

board.onmouseover = (e) => {
    if( isPressed && e.target.className !== 'board' && !isErase){
        e.target.style.backgroundColor = random ? random_color() : color.value;
    }else if(isPressed && e.target.className !== 'board' && isErase){
        e.target.style.backgroundColor = 'unset';
    }else  
        return false;   

};

board.addEventListener('mouseup',(e)=>{
    e.preventDefault();
    isPressed = false;
    
    });

// board.addEventListener('touchstart',(e)=>{
//     e.preventDefault();
//     isPressed = true;
//     console.log(e);
//     });

// board.addEventListener('touchend',(e)=>{
//     e.preventDefault();
//     isPressed = false;
//     console.log(e);
//     });

// let x = 0;

// board.ontouchmove = (e) => {
//     // if( isPressed){
//     //     e.changedTouches.style.backgroundColor = 'red';
//     // }else return false; 
//     e.target.classList.add(`h${x}`);  
//     console.log(e.changedTouches);
//     x++;
// };
