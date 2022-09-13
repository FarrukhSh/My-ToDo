'use strict';


//Установка даты и часов в реальном времени
function displayC() {
    let refresh = 1000;
    setTimeout(`displayCt()`, refresh);
}

function displayCt() {
    let x = new Date();
    document.getElementById('current-date-time').innerHTML = x;
    displayC();
}

/****************************************************************/

// Объявление кнопки зачеркивания
let done = document.getElementsByClassName("done");

let checked = document.getElementsByClassName("checked");

// Объявление кнопки удаления
let deleted = document.getElementsByClassName("delete");

// функция добавляющая новый лист при нажатии на кнопку добавления

let confirmButton = document.querySelector('.confirm-button');



function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("taskField").value;
    let taskField = document.getElementById("taskField");
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    let emptyInput = document.querySelector('#error-message p');

    //создание текста ошибки при оставлении поля пустым
    if (inputValue === '') {
        emptyInput.textContent = "Do not leave the field empty, otherwise it will not work!";
        taskField.style.borderColor = "red";
    } else {
        emptyInput.textContent = '';
        taskField.style.borderColor = "gray";
        document.getElementById("outputToDoList").appendChild(li);
    }
    document.getElementById("taskField").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("");
    span.className = "delete";
    span.appendChild(txt);
    li.appendChild(span);

    //добавление активности к кнопке удаления
    for (let i = 0; i < deleted.length; i++) {
        deleted[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        };
    }
    let span1 = document.createElement("SPAN");
    let txt1 = document.createTextNode("");
    span1.className = "done";
    span1.appendChild(txt1);
    li.appendChild(span1);


    // добавления активности к кнопке зачеркивания
    for (let i = 0; i < done.length; i++) {
        done[i].onclick = function (e) {
            // e.target.parentNode.removeChild(e.target);
            let div = this.parentElement;
            div.style.textDecoration = "line-through";
            div.style.color = "red";
            let checkMark = document.createElement("SPAN");
            let txt2 = document.createTextNode("");
            checkMark.className = "checked";
            checkMark.appendChild(txt2);
        };
    }


    
    li.appendChild(checkMark);

    //добавления галочки
    for (let i = 0; i < checked.length; i++) {
        checked[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "flex";
        };
    }

    // добавления даты и времени в задачах
    let dateTime = document.createElement("SPAN");
    let txt3 = document.createTextNode("");
    dateTime.appendChild(txt3);
    li.appendChild(dateTime);

}

// confirmButton.addEventListener('click', newElement());

// не смог подключить функцию к кнопке правильно,
// не смог соединят дату и время с задачками
// не смог добавить галочку