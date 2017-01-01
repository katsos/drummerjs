'use strict';

const KEY = {
    SPACE: 32,
    B: 66,
    E: 69,
    H: 72,
    I: 73,
    O: 79,
    R: 82,
    S: 83,
    U: 85,
    W: 87
}
const keys  = document.querySelectorAll('.hit-effect');
const audios = document.querySelectorAll('audio-sources audio');

window.addEventListener('keydown', (e) => {

    e.preventDefault();

    switch(e.keyCode) {
        case KEY.SPACE:
        case KEY.B:
            playAnimate('kick');
            break;
        case KEY.H:
            playAnimate('hi-hat');
            break;
        case KEY.U:
            playAnimate('ride');
            break;
        case KEY.S:
            playAnimate('snare');
            break;
        case KEY.I:
            playAnimate('crash-left');
            break;
        case KEY.O:
            playAnimate('crash-right');
            break;
        case KEY.W:
            playAnimate('tom-left');
            break;
        case KEY.E:
            playAnimate('tom-right');
            break;
        case KEY.R:
            playAnimate('tom-floor');
            break;
    }

});

function playAnimate (drum) {
    triggerSound(drum);
    // TODO: animate(drum);
}

function triggerSound (drum) {

    Array.from(audios).find( audio => {
        let dataKey = audio.attributes['data-key'].nodeValue;
        // copy node and play it (polyphony purposes)
        if ( dataKey === drum ) audio.cloneNode().play();
        return dataKey === drum;
    });

}

/* TODO: add mouse-touch listeners */
/* listen mouse-touch */
/* 
 keys.forEach(key => key.addEventListener('click', trigger));
*/

/* TODO: animate hit */
// function animate (drum) {
//     let elem = document.getElementById(drum);
//     // animate playing
//     elem.classList.add('playing');
//     // after 1ms animate stoping
//     setTimeout( () => {
//         elem.classList.remove('playing');
//     }, 4);
// }