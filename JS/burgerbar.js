let sidebar = document.querySelector('.aside');
let burgerButton = document.querySelector('.burger');
burgerButton.onclick = function () {
    if (sidebar.classList.contains('aside')){
        sidebar.classList.replace('aside', 'sidebar');
    }
    else {
        sidebar.classList.replace('sidebar','aside');
    }
}