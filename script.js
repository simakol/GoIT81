// Написати таймер зворотнього відліку до Нового року який можна зупиняти при кліку на кнопку **Stop**

/*
    1. отримати рефси
    2. створимо дату наступного Нового року, до якого буде відлік
    3. отримуємо поточну дату
    4. віднімаємо від дати Нового року поточну дату і отримуємо кількість мілісекунд яка лишилася до Нового року 
    5. витягуємо з наших мілісекунд дні, години, хвилини і секунди
    6. відображаємо дані користувачу на екран
    7. запуск інтервалу який буде оновлювати час кожну секунду

    як зупинити таймер?
    1. вішаємо слухач подій на кнопку стоп
    2. при кліку очищаємо інтервал - передаємо айді створеного інтервалу
*/

const refs = {
  timer: document.getElementById("timer"),
  stopBtn: document.getElementById("stopBtn"),
};

refs.stopBtn.addEventListener("click", stopTimer);

const newYear = new Date(`Jan 1 ${new Date().getFullYear() + 1}`);

countDownToNY();
const intervalId = setInterval(countDownToNY, 1000);

function countDownToNY() {
  const now = new Date();
  const diff = newYear - now;

  const countDownDate = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };

  refs.timer.textContent = `${countDownDate.days} day${toggleS(
    countDownDate.days
  )} ${addZero(countDownDate.hours)} hour${toggleS(
    countDownDate.hours
  )} ${addZero(countDownDate.minutes)} minute${toggleS(
    countDownDate.minutes
  )} ${addZero(countDownDate.seconds)} second${toggleS(countDownDate.seconds)}`;
}

function addZero(number) {
  return String(number).padStart(2, 0);
}

function stopTimer() {
  clearInterval(intervalId);
  refs.stopBtn.removeEventListener("click", stopTimer);
}

function toggleS(number) {
  return number <= 1 ? "" : "s";
}
