let btnLogin = document.querySelector('#verSenhaLogin');

//evento para visualizar o campo senha
btnLogin.addEventListener('click', () => {
    //pega o 
    let inputPassWord = document.querySelector('#passwordLogin');


    if (inputPassWord.getAttribute('type') == 'password') {
        inputPassWord.setAttribute('type', 'text');
    } else {
        inputPassWord.setAttribute('type', 'password');

    }
});



function login() {

    //pega os elementos do formLogin
    let mail = document.getElementById('mail');
    let password = document.getElementById('passwordLogin');
    let msgError = document.querySelector('#msgError')

    let listaUser = [];

    let loginValid = {
        fullName: '',
        mail: '',
        password: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if (mail.value == item.mailCad && password.value == item.passwordCad) {

            loginValid = {
                fullName: item.fullNameCad,
                mail: item.mailCad,
                password: item.passwordCad
            }
        }
    });
    if (mail.value == loginValid.mail && password.value == loginValid.password) {

        //direciona para a tela principal index
        const newLocal = window.location.href = "index.html";

        localStorage.setItem('userLogado', JSON.stringify(loginValid));

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'E-mail ou senha incorretos'
    }

}
