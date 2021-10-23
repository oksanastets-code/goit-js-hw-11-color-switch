import colors from './data/colors.js';

const min = 0;
const max = colors.length - 1;

const DELAY = 1000;
let intervalId = null;
let isActive = false;

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
    if (isActive) {
        console.log("it's not for the first time!", isActive)
        return;
    }
    isActive = true;
    intervalId = setInterval(() => {
        const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
        };
        let bcgColor = colors[randomIntegerFromInterval(min, max)];
        console.log(bcgColor, isActive);
        document.body.style.backgroundColor = bcgColor;
    }, DELAY)
}

function onStopClick() {
    if (!isActive) {
        return;
    }
    clearInterval(intervalId);
    isActive = false;
    console.log('enough');
    console.log(isActive);
}
