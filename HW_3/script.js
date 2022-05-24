
// Задание 3

const xhr = new XMLHttpRequest();

const resultNode = document.querySelector(".result");
const btnNode = document.querySelector(".btn-async-request");
const input = document.querySelector('.input');

function useRequest(url, callback) {
    xhr.open("GET", url, true);
    xhr.onload = () => {
        if (xhr.status != 200) {
            console.log("Статус ответа ", xhr.status)
        }
        else {
            const result = (JSON.parse(xhr.response));
            if (callback) {
                callback(result);
            }
        }
    }
    xhr.send();
};

function displayResult(apiData) {
    let cards = "";
    apiData.forEach(item => {
        const cardBlock =
            `<div class="card">
            <img src="${item.download_url}" class="card-image"/>
            <p>${item.author}</p>
        </div>`;
        cards += cardBlock;
    });
    resultNode.innerHTML = cards;
}

btnNode.addEventListener("click", () => {
    const inputValue = input.value;
    if (inputValue <= 0 || inputValue > 10) {
        resultNode.innerHTML = "<p>Число вне диапазона от 1 до 10</p>";
    } else {
        useRequest(`https://picsum.photos/v2/list?limit=${inputValue}`, displayResult);
    }
})