$(function () {


});

//Добавление класса следующему элементу
const btn = document.getElementById('capt-plus');
const next = btn.nextElementSibling;

btn.addEventListener('click', function (event) {
    event.stopPropagation(); // блокируем всплытие до документа
    next.classList.toggle('open');
});

document.addEventListener('click', function (event) {
    // Если клик не по кнопке и не внутри следующего элемента → убираем класс
    if (!btn.contains(event.target) && !next.contains(event.target)) {
        next.classList.remove('open');
    }
});