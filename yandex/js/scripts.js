// var activ = document.querySelector('news-tab-world  ');
// title.inner= 'Privet';

// var btn = document.querySelector('.news-tab-world ');

// function onClick() {
//   var newslistWorld = document.querySelector('.news-list-world')
// newslistWorld.style.display = 'block';
// newslistMoscow.style.display = 'none';
// }

// // newstabwold.classlist.remove ("active");

// Находим кнопки и записываем в переменные и так же к спискам


// записываем обработчики на кнопки имяпеременной.addEventListener ('click', function(){
//   описываем что меняем классы через List
//   отображение через style none
// }


var searchBtn = document.querySelector ('.search-btn');
var searchInput = document.querySelector ('.search-input');


searchBtn.addEventListener ("click", function(){
var queStr = 'https://yandex.ru/search/?text' + searchInput.value;
window.open (queStr);
});
searchBtn.addEventListener ("keydown", function(ev){
  if (ev.keyCode == "13") {
    var queStr = 'https://yandex.ru/search/?text' + searchInput.value;
  }

});