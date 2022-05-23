//pega o id do campo i referente a classe fa-eye do formNovoUsuario 
//referente a senha
let btn = document.querySelector('#verSenha');

//evento para visualizar o campo senha
btn.addEventListener('click', () => {
    //pega o 
    let inputSenha = document.querySelector('#password');


    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
    } else {
        inputSenha.setAttribute('type', 'password');

    }
});

//pega o id do campo i referente a classe fa-eye do formNovoUsuario 
//referente a confirmasenha
let btnConfirm = document.querySelector('#verConfirmaSenha');

//evento para visualizar o campo confirmasenha
btnConfirm.addEventListener('click', () => {
    let inputConfirmaSenha = document.querySelector('#confirm');


    if (inputConfirmaSenha.getAttribute('type') == 'password') {
        inputConfirmaSenha.setAttribute('type', 'text');
    } else {
        inputConfirmaSenha.setAttribute('type', 'password');

    }
});

let fullName = document.querySelector('#fullName');
let validFullName = false;

let mail = document.querySelector('#mail');
let validMail = false;

let phone = document.querySelector('#phone');

let cpf = document.querySelector('#CPF');
let validCPF = false;

let password = document.querySelector('#password');
let validPassword = false;

let confirmPassword = document.querySelector('#confirm');
let validConfirmPassword = false;


fullName.addEventListener('keyup', () => {

    if (fullName.value.length <= 2) {
        labelFullName.setAttribute('style', 'color: red');
        labelFullName.innerHTML = 'Nome: * Insira no minimo 3 caracteres';
        validFullName = false;

    } else if (fullName.value.length > 50) {
        labelFullName.innerHTML = 'Nome * Máximo de 50 caracteres';
        labelFullName.setAttribute('style', 'color: red');
        validFullName = false;
    } else {
        labelFullName.setAttribute('style', 'color: green');
        labelFullName.innerHTML = 'Nome';
        validFullName = true;
    }
});


cpf.addEventListener('keyup', () => {

    if (cpf.value.length > 11 || cpf.value.length < 11) {
        labelCPF.setAttribute('style', 'color: red');
        labelCPF.innerHTML = 'CPF: obrigatório 11 números sem ponto e traço'
        validCPF = false;
    } else if (cpf.value.length == 11) {
        labelCPF.setAttribute('style', 'color: green');
        labelCPF.innerHTML = 'CPF:';
        validCPF = true;

    }
})

password.addEventListener('keyup', () => {

    if (password.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: red');
        labelPassword.innerHTML = 'Senha: * Minimo de 6 caracteres, 1 letra Maisucula e 1 número';
        validPassword = false;

    } else if ((password.value.length > 5) && (password.value.match(/[A-Z]+/)) && password.value.match(/[1-9]+/)) {
        labelPassword.setAttribute('style', 'color: green');
        labelPassword.innerHTML = 'Senha:';
        validPassword = true;

    }
})

confirmPassword.addEventListener('keyup', () => {

    if (password.value != confirmPassword.value) {
        labelConfirm.setAttribute('style', 'color: red');
        labelConfirm.innerHTML = 'Confirme sua senha: * as senhas não conferem';
        validConfirmPassword = false;

    } else {
        labelConfirm.setAttribute('style', 'color: green');
        labelConfirm.innerHTML = 'Confirme sua senha:';
        validConfirmPassword = true;

    }
})

function cadastrar() {
    let msgCadError = document.querySelector('#msgCadError');

    if (validFullName && validCPF && validPassword && validConfirmPassword) {

        console.log(validFullName + ' ' + validCPF + ' ' + validPassword + ' ' + validConfirmPassword)
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({

            fullNameCad: fullName.value,
            mailCad: mail.value,
            phoneCad: phone.value,
            cpfCad: cpf.value,
            passwordCad: password.value

        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser));
        const newpage = window.location.href = "../formLogin.html";
    } else {

        msgCadError.setAttribute('style', 'display: block')
        msgCadError.innerHTML = 'Verifique o preenchimento dos campos'

    }

}


//Login 

//pega o id do campo i referente a classe fa-eye do formNovoUsuario 
//referente a senha