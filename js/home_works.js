

// ANALOG CLOCK

const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

for(let s = 0; s < 60; s++){
    let mSpikeEl = document.createElement('i');
    let sSpikeEl = document.createElement('i');
    mSpikeEl.className = 'spike'
    sSpikeEl.className = 'spike'
    mSpikeEl.style = `--rotate:${6 * s}deg`;
    sSpikeEl.style = `--rotate:${6 * s}deg`;
    mSpikeEl.setAttribute('data-i', s);
    sSpikeEl.setAttribute('data-i', s);

    seconds.append(sSpikeEl);
    minutes.append(mSpikeEl);
}

const getTime = () => {
    let date = new Date(),
        s  = date.getSeconds() ,
        m  = date.getMinutes();

    hour.textContent = date.getHours();
    minute.textContent = m;
    minutes.style = `--dRotate:${6 * m}deg`;

    if(s === 0){
        seconds.classList.add('stop-anim')
    } else{
        seconds.classList.remove('stop-anim')
    }
    if(m === 0){
        minutes.classList.add('stop-anim')
    } else{
        minutes.classList.remove('stop-anim')
    }

    seconds.style = `--dRotate:${6 * s}deg`;
}

setInterval(getTime, 1000);
getTime();









const childBlock = document.querySelector('.child_block')

let positionX = 0
let positionY = 0 

const moveBlock = () => {
    if ( positionX < 448 && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock,1)

    }else if (positionX >= 448 && positionY< 448){
        positionY++
        childBlock.style.top =`${positionY}px`
        setTimeout(moveBlock,1)
    }
    else if(positionX <= positionY && positionX >= 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock,1)
    }else if(positionY != positionX){
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock,1)
    }
    
}
moveBlock()

// STOP WATCH 

const digits = document.querySelector('#minutes')
const value = parseInt(digits.textContent);

const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')
const resumeButton = document.querySelector('#resume')



let times = 0
let interval;
let hasStarted = false

resetButton.onclick = function (){
    times = 0
    digits.innerHTML = times
    if (interval) clearInterval(interval)
    interval = undefined
    hasStarted = false
}

startButton.onclick = function (){

    if(!interval && !hasStarted){
        interval = setInterval(function () {
            if (times < 999){
                times++
                digits.innerHTML = times
            }
        }, 1000)

        hasStarted = true
    }
}


stopButton.onclick = function(){
    if(interval && hasStarted){
        clearInterval(interval)
        interval = undefined
    }
}

resumeButton.onclick = function (){
    if(!interval && hasStarted){
        interval = setInterval(function () {
            if (times < 999){
                times++
                digits.innerHTML = times
            }
        }, 1000)
    }
}