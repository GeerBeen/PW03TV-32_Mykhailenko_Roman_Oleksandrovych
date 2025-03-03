 // Константи для розрахунків:
const ENERGY_FRACTION1 = 0.2; //  Частки енергії без небалансів 1
const ENERGY_FRACTION2 = 0.68; //  Частки енергії без небалансів 2


function getValueById(id) { //  Функція отримання значення
  return +parseFloat(document.getElementById(id).value);
}

function setValueToId(id, value) { //  Відобразити значення в заданому елементів;
  const element = document.getElementById(id); //  Отримуємо елемент з DOM;
  if (element) { // Перевіряємо чи елемент існує;
    element.innerHTML = (+value).toFixed(2); //  Якщо існує то встановлюємо значення;
  } else {
    console.log(`Елемент з id "${id}" не знайдено.`); // Якщо ні - виводимо помилку в консоль;
  }
}

function calculateAndShow(event) { // Головна функція;
    event.preventDefault(); // Заборона перезавантаження сторінки;

    // Отримуємо введені значення;
    let avg_power = getValueById('avg_power');
    let deviation1 = getValueById('deviation1');
    let deviation2 = getValueById('deviation2');
    let price = getValueById('price');

    // Виконуємо обрахунки для першого відхилення
    let energy1 = avg_power * 24 * ENERGY_FRACTION1; //  Отримана енергія 1
    let profit1 = energy1 * price * 1000; // Прибуток 1
    let energy2 = avg_power * 24 * (1 - ENERGY_FRACTION1); //  Отримана енергія 2
    let fine1 = energy2 * price * 1000; // Штраф 1

    // Виконуємо обрахунки для другог відхилення
    let energy3 = avg_power * 24 * ENERGY_FRACTION2; //  Отримана енергія 3
    let profit2 = energy3 * price * 1000;  // Прибуток 2

    let energy4 = avg_power * 24 * (1 - ENERGY_FRACTION2); //  Отримана енергія 4
    let fine2 = energy4 * price * 1000; // Штраф 2

    let final_profit = (profit2 - fine2) / 1000; //  Обрахунок фінального результату

    // Вивід фінального результату у вигляді прибутку тисяч гривень
    setValueToId("result", final_profit);
  

  }

