// const refs = {
//     input: document.querySelector('input'),
//     span: document.querySelector('span'),
// }

// refs.span.classList.add('text-style');
// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//     refs.span.style.fontSize = `${event.curentTarget.value}`;
// }

const inputRange = document.querySelector('#font-size-control');

inputRange.addEventListener('input', (evend) => {
    const spanText = document.querySelector('#text');
    spanText.style.fontSize = `${Number(inputRange.value)}px`;
})

