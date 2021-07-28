// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open("GET", "https://swapi.dev/api/people");

// 3. Отсылаем запрос
xhr.send();
xhr.onload = function () {
  if (xhr.status !== 200) {
    // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else {
    // если всё прошло гладко, выводим результат
    //alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера

const response = xhr.response;
const data = JSON.parse(response);
console.log(data.results.length);
//var my_div = newDiv = null;???

for (let i=0; i<data.results.length; i++){

addElement(data.results[i]);

}



  }
};

function addElement(data) {

    // Создаём новый элемент div
    // и добавляем в него немного контента

    var newDiv = document.createElement("tr");
        newDiv.innerHTML = `<td>${data.name}</td><td>${data.mass}</td><td>${data.height}</td>`;

    // Добавляем только что созданный элемент в дерево DOM

    my_div = document.getElementById("org_div1");
    //document.body.insertBefore(newDiv, my_div);
  my_div.append(newDiv); 

}