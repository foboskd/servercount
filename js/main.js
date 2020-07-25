// просто копаю ванильный js!!!

let filterElementproject = document.querySelector('.filtermenu_container');
let headerelement = document.querySelector('.header_list');
let listelement = document.querySelector('.list_container');

let lastetargetid = filterElementproject.children[0]; // пока так, нужно для того что бы во втором событии определять что первым выбран именно первый элемент меню
let requestResponse; // пременная под запрос
let fornewlistline = []; //


document.addEventListener("DOMContentLoaded", (e)=>{
    filterElementproject.children[0].style = 'color: #676767; border-bottom: .05rem solid #C4C4C4;'; // просто устанавливаем в момент загрузки станицы стили для первого элемента меню
})

filterElementproject.addEventListener('click', (e)=>{
    if(lastetargetid.id != e.target.id){ // если id выбранного элемента не соответствует id.target то мы меняем стили добавляя новые тому на котором был клик и удаляя у того который был выбран до этого
        lastetargetid.style = ' '; // соответственно выбранный
        e.target.style = 'color: #676767; border-bottom: .05rem solid #C4C4C4;'; // соответственно выбираемый
    }
    else if (lastetargetid.id == e.target.id){
        lastetargetid.style = 'color: #676767; border-bottom: .05rem solid #C4C4C4;';
    }
    lastetargetid = e.target;

    let request = new XMLHttpRequest()
    request.open('GET', 'stab.json', false);
    request.send();

    requestResponse = JSON.parse(request.responseText);
    let index;
    let d_index;

    for(index = 0; index<requestResponse['head-menu-project']['content'][0].length; ++index){
        headerelement.children[index].innerHTML = requestResponse['head-menu-project']['content'][0][index];
    }

    //console.log(listelement.children);

    for (index = 0; index<requestResponse['content-project']['content'].length; index++){
        //console.log(requestResponse['content-project']['content'].length);

        for(d_index = 0; d_index<requestResponse['content-project']['content'][index].length; d_index++){
            //fornewlistline[index][d_index] = "<li>" + requestResponse['content-project']['content'][index][d_index] + "</li>";
            console.log(requestResponse['content-project']['content'][index][d_index]);
        }
    }
    console.log(fornewlistline);
    listelement.innerHTML = "<ul>"+ fornewlistline +"</ul>";
    //console.log(requestResponse['head-menu-project']['content'][0][2])

})



