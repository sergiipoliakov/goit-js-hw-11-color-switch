const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector(
  'button[data-action="start"]',
);
const stopBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', onStartBtnClick);

stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  const intervalId = setInterval(() => {
    const randonColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];

    bodyEl.style.backgroundColor = randonColor;
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(intervalId);
}
