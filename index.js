// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL
xhr.open("GET", "https://swapi.dev/api/people");

// 3. Отсылаем запрос
xhr.send();

xhr.onload = function () {
    if (xhr.status !== 200) {
        // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else {
        // если всё прошло гладко, выводим результат

        const response = xhr.response;

        //переводим данные с сервера в тип объект
        const data = JSON.parse(response);

        //отрисовываем в таблицу
        data.results.forEach(element => {
            addElement(element)
        });

        //вариант через цикл 
        // for (let i = 0; i < data.results.length; i++) {
        //     addElement(data.results[i]);
        // }
    }
};

//функция для создания элементов
function addElement(data) {

    // Создаём новый элемент

    var newTR = document.createElement("tr");

    // и добавляем в него немного контента

    newTR.innerHTML = `<td>${data.name}</td><td>${data.mass}</td><td>${data.height}</td>`;

    //находим элемент куда будем добавлять

    myElement = document.getElementById("table");

    // Добавляем только что созданный элемент в дерево DOM

    myElement.append(newTR);
}