// alert('Привет назови себя');
// var myName = prompt ("введите имя");
// alert ("Привет, " + myName + "!");

// var name = 'Антон' ;
// var fam = ('Солоха');
// var god = 1988;
// var auto = false;
// alert (
//     name + '\n' 
//     + fam +'\n' 
//     + "Год рождения:" 
//     + god +'\n'
//     + auto
// );

// var a = promt ();


// if (a>10) {
//     alert ('a - большая');
// }
// else if (a==10) {
//     alert ('a=10');
// }

// var user = {
//     name: "Антон",
//     lastName: 'Солоха',
//     sayHello: function() {
//         var myName = this.name + ''+this.lastName;
//         alert ('Hello, my name is' + myName + '!');
//     }

// };

// window.outerWidth = 200;  //глобальный, много ссвойств почитать
// document.title 
// navigator

// var site = [MOs, dmit, nor];
// typeof site
// site.push


var list = document.querySelector('.list');

var listItem = document.createElement('li');
listItem.textContent = 'Moscow';
list.appendChild(listItem);



var cities = ['moscow','dmitrov','norilsk','kyveit'];
for (var i = 0; i < cities.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = cities [i];
    list.appendChild(listItem);
}


var btn = document.querySelector ('.add');

btn.addEventListener('click', function(){
    var newCity =  prompt('input new city');
    var listItem = document.createElement('li');
    listItem.textContent = newCity;
    list.appendChild(listItem);

})



