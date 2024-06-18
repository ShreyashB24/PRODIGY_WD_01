let isRunning = false;
let startTime;
let interval;
const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('lapList');

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        startStopButton.textContent = 'Start';
    } else {
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateTime, 10);
        isRunning = true;
        startStopButton.textContent = 'Stop';
    }
}

function updateTime() {
    const currentTime = new Date(Date.now() - startTime);
    const hours = currentTime.getUTCHours();
    const minutes = currentTime.getUTCMinutes();
    const seconds = currentTime.getUTCSeconds();
    const milliseconds = Math.floor(currentTime.getUTCMilliseconds() / 10);
    display.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    display.textContent = '00:00:00.00';
    startStopButton.textContent = 'Start';
    lapButton.textContent = 'Lap';
    startTime = null;
    lapList.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = display.textContent;
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}

reset(); 
