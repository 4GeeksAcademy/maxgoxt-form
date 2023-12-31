function validCredit() {
    let credit = document.querySelectorAll('input.option')
    let alert = document.getElementById('alert');
    for (let cards = 0; cards < credit.length; cards++) {
        if (!credit[cards].checked) {
            alert.removeAttribute('hidden');
        }
    }
}

function greenAlert() {
    let form = document.getElementById('form');
    let alert2 = document.getElementById('alert2');
    stopForm()
    for (let i = 0; i < form.length; i++) {
        if (form[i].values !== '' && form[i].value !== 'send' && form[i].value !== 'cancel' && form[i].value !== 'masterCard') {
            alert2.removeAttribute('hidden');
        }
    }
}

function stopForm() {
    form.addEventListener('click', function (event) {
        event.preventDefault();
    })
}

function alertInput() {
    let form = document.getElementById('form');
    let alert = document.getElementById('alert');
    stopForm()
    for (let i = 0; i < form.length; i++) {
        if (form[i].value == '') {
            form[i].style.border = '1px solid #f66';
            alert.removeAttribute('hidden');
        }
    }
    validCredit()
}
