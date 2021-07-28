//search
const body = document.querySelector('body');
const searchBtn = document.querySelector('#search');
const searchInput = document.querySelector('#search-input');
let active = false;

body.addEventListener('click', (e) => {
    if(e.target.id === 'search' || e.target.id === 'search-input' || e.target.id === 'search-icon') {
        if(!active) {
            searchBtn.classList.add('active');
            searchInput.classList.add('active');
            active = true;
        }
    } else {
        searchBtn.classList.remove('active');
        searchInput.classList.remove('active');
        searchInput.value = '';
        active = false;
    }
});


let loadButton = document.querySelector('#load-more');

loadButton.onclick = function(){
    loadButton.classList.add('active');
    setTimeout(function () {
        loadButton.classList.remove('active');
    }, 5000)

};
