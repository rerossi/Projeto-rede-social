let btn = document.querySelector('#verSenha');

btn.addEventListener('click' , () =>{
    let inputSenha = document.querySelector('#password');
    

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    }else{
        inputSenha.setAttribute('type', 'password');
        
    }
});

let btnConfirm = document.querySelector('#verConfirmaSenha');

btnConfirm.addEventListener('click' , () =>{
    let inputConfirmaSenha = document.querySelector('#confirm');
    

    if(inputConfirmaSenha.getAttribute('type') == 'password'){
        inputConfirmaSenha.setAttribute('type', 'text');
    }else{
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


fullName.addEventListener('keyup', () =>{

    if(fullName.value.length <= 2){
        labelFullName.setAttribute('style', 'color: red');
        labelFullName.innerHTML = 'Nome: * Insira no minimo 3 caracteres';
        
    }else if(fullName.value.length > 50){
        labelFullName.innerHTML = 'Nome * Máximo de 50 caracteres';
        labelFullName.setAttribute('style', 'color: red');
    }
    else{
        labelFullName.setAttribute('style', 'color: green');
        labelFullName.innerHTML = 'Nome';
        }
});

 mail.addEventListener('keyup', () =>{

    if(mail.value.length > 30){
            labelMail.setAttribute('style', 'color: red');
            labelMail.innerHTML = 'E-mail: * Máximo de 30 caracteres';
    
    }else{
            labelMail.innerHTML = '<b>E-mail:</b>';
         }
})

password.addEventListener('keyup', () =>{

    if(password.value.length <=5 ){
            labelPassword.setAttribute('style', 'color: red');
            labelPassword.innerHTML = 'Senha: * Minimo de 6 caracteres, 1 letra Maisucula e 1 número';
    
    }else if((password.value.length > 5) && (password.value.match(/[A-Z]+/)) && password.value.match(/[1-9]+/)){
        labelPassword.setAttribute('style', 'color: green');
        labelPassword.innerHTML = 'Senha:';
	}
})

confirmPassword.addEventListener('keyup', () =>{

    if(password.value != confirmPassword.value ){
            labelConfirm.setAttribute('style', 'color: red');
            labelConfirm.innerHTML = 'Confirme sua senha: * as senhas não conferem';
    
    }else{
        labelConfirm.setAttribute('style', 'color: green');
        labelConfirm.innerHTML = 'Confirme sua senha:';
	}
})

    

cpf.addEventListener('keyup', () =>{

if(cpf.value.length == 11){
    labelCPF.setAttribute('style', 'color: green');
    labelCPF.innerHTML = 'erro'
}
})



function cadastrar(){


}