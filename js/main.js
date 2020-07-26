// просто копаю ванильный js!!!

let filterElementproject = document.querySelector('.filtermenu_container');
let headerelement = document.querySelector('.header_list');
let listelement = document.querySelector('.list_container');
let lastetargetid = filterElementproject.children[0]; // пока так, нужно для того что бы во втором событии определять что первым выбран именно первый элемент меню


document.addEventListener("DOMContentLoaded", (e)=>{
    filterElementproject.children[0].style = 'color: #676767; border-bottom: .05rem solid #C4C4C4;'; // просто устанавливаем в момент загрузки станицы стили для первого элемента меню
})

filterElementproject.addEventListener('click', (e)=>{
    let request; // для создания объекта XMLHttpRequest
    let index; // счетчик для цикла 1-й уровень
    let d_index; // счетчик для цикла 2-й уровень
    let requestResponse; // пременная под получение ответа на запрос
    let fornewlistline = []; // массив под пересохранение списка записей по серверу
    let textkonkat = []; // массив под объединение после форматирования в строку

    if(lastetargetid.id != e.target.id){ // если id выбранного элемента не соответствует id.target то мы меняем стили добавляя новые тому на котором был клик и удаляя у того который был выбран до этого
        lastetargetid.style = ' '; // соответственно выбранный
        e.target.style = 'color: #676767; border-bottom: .05rem solid #C4C4C4;'; // соответственно выбираемый
    }
    else if (lastetargetid.id == e.target.id){
        lastetargetid.style = 'color: #676767; border-bottom: .05rem solid #C4C4C4;';
    }
    lastetargetid = e.target;

    request = new XMLHttpRequest()
    request.open('GET', 'stab.json', false);
    request.send();
    requestResponse = JSON.parse(request.responseText);

    for(index = 0; index<requestResponse['head-menu-project']['content'][0].length; ++index){
        headerelement.children[index].innerHTML = requestResponse['head-menu-project']['content'][0][index];
    }

    for (index = 0; index<requestResponse['content-project']['content'].length; index++){
        fornewlistline[index] = [];
        for(d_index = 0; d_index<requestResponse['content-project']['content'][index].length; d_index++){
            fornewlistline[index][d_index] = "<li class=\"line_listelement\">" + requestResponse['content-project']['content'][index][d_index] + "</li>";

            if (textkonkat[index] == undefined){
                textkonkat[index] = fornewlistline[index][d_index]
            }
            else{
                textkonkat[index] += fornewlistline[index][d_index]
            }
        }
    }

    for (index = 0; index<fornewlistline.length; ++index){
        listelement.innerHTML += "<ul class=\"line_list\">"+ textkonkat[index] +"</ul>";
        console.log(fornewlistline.length);
    }

})



