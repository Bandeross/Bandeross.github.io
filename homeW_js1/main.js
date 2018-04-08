

var userName = prompt('Введите имя пользователя:');
if (userName != null) {
      var pass = prompt('Пароль?');
        if (pass != null, userName == 'admin', pass == 'qwerty123456' ) {
          alert( 'Добро пожаловать, администратор!' );
        } 
        
        else if (pass == null) { 
            alert( 'отмена ввода' ); 
        } 
        else if (userName !='admin', pass !='qwerty123456') {
          alert ( 'Логин или Пароль указан не верно!' );
          alert ('Вход отменен')
        }
      }

else {
  alert ("отмена входа")
}



// var userName = prompt('Введите имя пользователя:');
// if (userName == 'admin') {
//       var pass = prompt('Пароль?');
//         if (pass == 'qwerty123456') {
//           alert( 'Добро пожаловать, администратор!' );
//         } 
//         else if (pass == "") {
//           alert ( 'Пароль обязательно должен быть указан!' );
//           alert ('Вход отменен')
//         }   
//         else {
//           alert( 'Неправильный пароль' );
//         }
// } 
// else if (userName == null) { 
//   alert( 'отмена ввода' );  
// } 
// else if (userName == "") {
//   alert ( 'Логин обязательно должен быть указан!' );
//   alert ('Вход отменен')
// }
// else {
//   alert ("что то пошло не так")
// }