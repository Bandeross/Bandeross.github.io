

var form = document.querySelector('.my-form'); // находим на странице форму по классу ".my-form" и сохраняем ссылку в переменную form

function validateEmail() {
    return true;
}

form.addEventListener('submit', function (ev) { // добавляем обработчик события submit (отправка формы)
  ev.preventDefault(); // отменяем стандартное поведение браузера при отправке формы

  var formName = document.querySelector('.form-name'); // находим на странице поле «Имя» и сохраняем ссылку на него в переменную formName
  var formEmail = document.querySelector('.form-email'); // находим на странице поле «Эл. почта» и сохраняем ссылку на него в переменную formName
  var formAgreement = document.querySelector('.form-agreement'); // находим на странице галочку «Я на все согласен» и сохраняем ссылку на него в переменную formName
  var formMessage = document.querySelector('.form-message');

  // if (!formName.value) // отсутствие значения в поле «имя»
  // if (formName.value === '') // сравнить с пустой строкой

  if (formName.value.length === 0) { // проверка, заполнено ли имя
    formMessage.innerHTML = 'Пожалуйста, заполните имя';
    formMessage.classList.remove('form-message-success');
    formMessage.classList.add('form-message-error');
  }
  else if (formEmail.value.length === 0) { // проверка, заполнена ли эл. почта
    formMessage.innerHTML = 'Пожалуйста, заполните эл. почту';
    formMessage.classList.remove('form-message-success');
    formMessage.classList.add('form-message-error');
  }
  else if (!validateEmail(formEmail.value)) { // проверка корректности формата эл. почты user@example.com
    formMessage.innerHTML = 'Пожалуйста, введите корректную эл. почту';
    formMessage.classList.remove('form-message-success');
    formMessage.classList.add('form-message-error');
  }
  else if (!formAgreement.checked) {
    formMessage.innerHTML = 'Пожалуйста, подтвердите согласие';
    formMessage.classList.remove('form-message-success');
    formMessage.classList.add('form-message-error');
  }
  else {
    formMessage.innerHTML = 'Ура! Форма отправлена, спасибо!';
    formMessage.classList.remove('form-message-error');
    formMessage.classList.add('form-message-success');

    var formData = JSON.stringify({
        name: formName.value,
        email: formEmail.value,
    });
    
    var params = {
        method:'post',
        body: formData,
        headers: {
            'Content-type': 'application/json'
        }
    };
    fetch('http://192.168.101.3:3001/database', params)
    .then (function(response) {
        return response.json()
    })
    .then (function(json){
        console.log(json)
    })
  }

});