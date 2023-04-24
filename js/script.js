const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const somGameOver = document.querySelector('#musica');
const musicaMario = document.querySelector('#musica-mario'); 
const puloMario = document.querySelector('#puloMario');

musicaMario.autoplay;

const jump = () => {
    mario.classList.add('jump');
    puloMario.play();

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosiotion = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosiotion);
 
    if (pipePosition <= 120 && pipePosition > 0 && marioPosiotion < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';        
        mario.style.left = `${marioPosiotion}px`;

        clouds.style.animation = 'none';        
        clouds.style.left = `${marioPosiotion}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '45px'

        clearInterval(loop);   

        musicaMario.pause();
        somGameOver.play()
    }
    else { 
        musicaMario.play();
    }

}, 10);

document.addEventListener('keydown', jump);      

