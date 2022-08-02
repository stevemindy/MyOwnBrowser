let btnOpen = document.getElementsById('btn')
let inputtext = document.getElementsById("urlboxinput")

btnOpen.addEventListener('click', function () {
        window.open(inputtext.value, '_blank');
    });