// просто копаю ванильный js!!!

let filterElementproject = document.querySelector('.filtermenu_container');
let lastetargetid = filterElementproject.children[0]; // пока так, нужно для того что бы во втором событии определять что первым выбран именно первый элемент меню
let requestResponse;

document.addEventListener("DOMContentLoaded", (e)=>{
    filterElementproject.children[0].style = 'color: #676767; border-bottom: .05rem solid #C4C4C4;'; // просто устанавливаем в момент загрузки станицы стили для первого элемента меню
})

filterElementproject.addEventListener('click', (e)=>{
    if(lastetargetid.id != e.target.id){ // если id выбранного элемента не соответствует id.target то мы меняем стили добавляя новые тому на котором был клик и удаляя у того который был выбран до этого
        lastetargetid.style = 'color:; border-bottom:;'; // соответственно выбранный
        e.target.style = 'color: #676767; border-bottom: .05rem solid #C4C4C4;'; // соответственно выбираемый
    }
    else if (lastetargetid.id == e.target.id){
        lastetargetid.style = 'color: #676767; border-bottom: .05rem solid #C4C4C4;';
    }
    lastetargetid = e.target;

    let request = new XMLHttpRequest()
    request.open('GET', 'stab.json', false);
    request.send();

    requestResponse = request.responseText;

})



