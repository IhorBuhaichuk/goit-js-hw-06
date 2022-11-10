const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const image = images.map(elem => {
  const url = elem.url
  const alt = elem.alt

  return `<li class "gallery-item"> <img src="${url}" alt="${alt}" width = "350px"</li>`
})

gallery.insertAdjacentHTML("afterbegin", image)


// const arr = [];

// for (let i = 0; i < images.length; i += 1) {
//   const newItem = document.createElement('li');
//   const newImg = document.createElement('img');
//   newImg.classList.add('size');
//   newImg.setAttribute('src', images[i].src-7);
//   newImg.setAttribute('alt', images[i].alt);
//   newItem.append(newImg);
//   console.log(newItem);
//   arr.push(newItem);
// }

// gallery.append(...arr);