// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const btnIncrem = document.querySelector('[data-action="increment"]');
const btnDecrem = document.querySelector('[data-action="decrement"]');
const span = document.querySelector('#value');

const increment = () => {
    counterValue += 1
    document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1
    document.getElementById('value').textContent = counterValue;
};

btnIncrem.addEventListener('click', increment);
btnDecrem.addEventListener('click', decrement);


console.log(counterValue);