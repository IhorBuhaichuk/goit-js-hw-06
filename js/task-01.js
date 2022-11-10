// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const refs = {
    mainUl: document.querySelector('#categories'),
    secondUl: document.querySelectorAll('.item')
}

console.log(`Number of categories:${refs.secondUl.length}`)


for (let i = 0; i < refs.secondUl.length; i += 1) {
    console.log(`Category: ${refs.secondUl[i].querySelector('h2').textContent}`)
    console.log(`Elements: ${refs.secondUl[i].querySelectorAll('li').length}`)
}