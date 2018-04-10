var API_KEY = "AIzaSyBwheoYt0INYUUcupBUawA2JBLfp3SiVMY";

var spreadsheetID = "1t0Q8SdgaUX7w62Vb2AzKHowKkm3i2_U3UKpuUxgYAak" ;

var range = "Контакты!b1:h93";

var API_URL = "https://sheets.googleapis.com/v4/spreadsheets/"
    + spreadsheetID
    + "/values/"
    + range
    + '?key=' + API_KEY;

// отпправка запроса и обработка ответа API
fetch(API_URL)
    .then(response => response.json()) // обрабатываем ответ апи
    .then(data => {
        var s = data.values;
        find (s, "Roman")
    
})

// Поиск годфазера среди  всей таблици
function find(arr, value) {
    
    for (var str = 0; str < arr.length; str++)
        if (arr[str][0] == value) {
            var strI = String (str);
            console.log (arr[strI]);
        }
}



// // Поиск нажатого чекбокса
// var CB_checked = document.querySelector('.gf');
// CB_checked.addEventListener ('checked', function(){
//   ///////что то надо ввести
// })

// var element = document.querySelector('.gf'); 
// alert (element);
// debugger

// if (element.addEventListener('click',function(){
//     console.log (element.id);
// }));


