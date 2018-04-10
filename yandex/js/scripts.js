///////////// Задание 1 ////////////////

// Находим кнопки
var newsTabWorld = document.querySelector('.news-tab-world');
var newsTabMoscow = document.querySelector('.news-tab-moscow');

// Находим списки новостей
var newsListWorld = document.querySelector('.news-list-world');
var newsListMoscow = document.querySelector('.news-list-moscow');

// Клик по кнопке «в Москве»
newsTabMoscow.addEventListener('click', function () {
  newsTabMoscow.classList.add('active'); // «в Москве» – активная
  newsTabWorld.classList.remove('active'); // «Новости» — неактивная
  newsListMoscow.style.display = 'block'; // Московские новости - показать
  newsListWorld.style.display = 'none'; // Мировые новости - скрыть
});

// Клик по кнопке «Новости»
newsTabWorld.addEventListener('click', function () {
  newsTabWorld.classList.add('active'); // «Новости» – активная
  newsTabMoscow.classList.remove('active'); // «в Москве» — неактивная
  newsListWorld.style.display = 'block'; // Мировые новости - показать
  newsListMoscow.style.display = 'none'; // Московские новости - скрыть
});

///////////// Задание 2 ////////////////

// Поисковая строка
var searchInput = document.querySelector('.search-input');

// Блок с подсказками
var searchAutocomplete = document.querySelector('.search-autocomplete');

// Обработчик каждого нажатия клавиш в поисковой строке
searchInput.addEventListener('keyup', function () {
  if (searchInput.value.length >= 3) { // если длина поискового запроса больше или равна 3 символам
    searchAutocomplete.style.display = 'block'; // отображаем блок подсказок
  }
  else {
    searchAutocomplete.style.display = 'none'; // иначе скрываем блок подсказок
  }
});

///////////// Задание 3 ////////////////

// Добавляем обработчик нажатия на блок с поисковыми подсказками
searchAutocomplete.addEventListener('click', function (ev) {
  // Если клик совершен по одному из пунктов списка (<li>)
  if (ev.target.tagName === 'LI') {
    // Формируем строку адреса к результатам поиска на Яндексе
    var queryStr = 'https://yandex.ru/search/?text=' + ev.target.textContent;

    // Открываем новое окно с результатами 
    window.open(queryStr);
  }
});

///////////// Задание 4 ////////////////

// Функция для открытие результатов поиска в новом окне
function openSearchResults() {
  if (searchInput.value.length > 0) {
    var query = 'https://yandex.ru/search/?text=' + searchInput.value;
    window.open(query);
  }
  else {
    alert('Введите поисковый запрос!');
  }
}

// Обработка нажатия на кнопку «Найти»
var searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', openSearchResults);

// Нажатие клавиши Enter в поисковой строке
searchInput.addEventListener('keydown', function (ev) {
  if (ev.keyCode === 13) { // 13 — код клавиши Enter
    openSearchResults();
  }
});