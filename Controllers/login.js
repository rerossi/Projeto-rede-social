function logar(){

    let email = document.getElementById('email');
    let senha = document.getElementById('password');

    if(email.value == "mail@mail.com" && senha.value == "admin"){
        console.log('acesso')
        localStorage.setItem("acesso", true);

        window.location.href = "../index.html";
    }else{

        alert('Usuário ou senha inválidos');
    }
}