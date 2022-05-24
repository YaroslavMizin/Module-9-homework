const input1 = document.querySelector('.input-height');
const input2 = document.querySelector('.input-width');

const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const width = +input1.value;
    const height = +input2.value;
    if (width >= 100 && width <= 300 && height >= 100 && height <= 300 && !isNaN(width) && !isNaN(height)) {
        fetch(`https://picsum.photos/${width}/${height}`)
            .then((response) => {
                result.innerHTML = `
            <div class="result">
                <img alt="Фото скоро появится" src="${response.url}">
            </div>`;
            })
            .catch(() => { console.log('error') });
    } else {
        result.innerHTML = '<p class="error">одно из чисел вне диапазона от 100 до 300</p>';
    }
});