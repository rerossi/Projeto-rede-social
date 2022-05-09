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