
let filterElementproject = document.querySelector('#filterelementproject');
let filterelementci = document.querySelector('#filterelementci');
let filterelementdomen = document.querySelector('#filterelementdomen');
let filterelementhost = document.querySelector('#filterelementhost');
let filterelementip = document.querySelector('#filterelementip');

filterElementproject.addEventListener('click', (e) =>{
    if (!filterElementproject.style.borderBottom)
    {
        filterElementproject.style.borderBottom = '.1rem solid #C4C4C4';

    }
    else
    {
        filterElementproject.style.borderBottom = '';

    }
})