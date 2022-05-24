// Задание 5
const result = document.querySelector(".result");
const inputNumber = document.querySelector(".page-number");
const inputLimit = document.querySelector(".limit");
const btn = document.querySelector(".btn");

let data = localStorage.getItem("savedData");

btn.addEventListener("click", () => {
    let pageNumber = inputNumber.value;
    let limit = inputLimit.value;
    if ((pageNumber < 1 || pageNumber > 10) && (limit < 1 || limit > 10)) {
        result.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10</p>";
    } else if (pageNumber < 1 || pageNumber > 10) {
        result.innerHTML = "<p>Номер страницы вне диапазона от 1 до 10</p>";
    } else if (limit < 1 || limit > 10) {
        result.innerHTML = "<p>Лимит вне диапазона от 1 до 10</p>";
    } else {
        fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                localStorage.setItem("savedData", JSON.stringify(data))
                displayResult(data);
            })
            .catch(console.log("error"))
    }
})

function displayResult(apiData) {
    let cards = "";
    apiData.forEach((item) => {
        const cardBlock =
            `<div class="card">
                <img src="${item.download_url}" class="card-image"/>
            </div>`;
        cards += cardBlock;
    });
    result.innerHTML = cards;
}

displayResult(JSON.parse(data));