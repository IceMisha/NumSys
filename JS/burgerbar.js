let sidebar = document.querySelector('.aside');
let burgerButton = document.querySelector('.burger');
burgerButton.onclick = function () {
    if (sidebar.classList.contains('aside')){
        sidebar.classList.replace('aside', 'sidebar');
        document.getElementById('dttitle').setAttribute('data-title', 'Закрыть навигационное меню')
    }
    else {
        sidebar.classList.replace('sidebar','aside');
        document.getElementById('dttitle').setAttribute('data-title', 'Открыть навигационное меню')
    }
}