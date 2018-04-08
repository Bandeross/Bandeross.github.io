var API_KEY = "AIzaSyBwheoYt0INYUUcupBUawA2JBLfp3SiVMY";

var spreadsheetID = "1t0Q8SdgaUX7w62Vb2AzKHowKkm3i2_U3UKpuUxgYAak" ;

var range = "Контакты!b2:g93";

var API_URL = "https://sheets.googleapis.com/v4/spreadsheets/"
    + spreadsheetID
    + "/values/"
    + range
    + '?key=' + API_KEY;
//отпправка запроса и обработка ответа API


fetch(API_URL)
    .then(response => response.json()) // обрабатываем ответ апи
    .then(data => {
        console.log(data.values); // выводим содержание таблицы
    })

// https://sheets.googleapis.com/v4/spreadsheets/1EXOVPVfmpZj_bSR3e1RwMbmB_7a_SUod0nv6PG80dpA/values/A1:B16?key=AIzaSyBwheoYt0INYUUcupBUawA2JBLfp3SiVMY
