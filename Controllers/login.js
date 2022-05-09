function logar(){

    let email = document.getElementById('email');
    let senha = document.getElementById('password');

    if(value.email == "mail@mail.com" && value.senha == "admin"){

        localStorage.setItem("acesso", true);

        window.location.href = "index.html";
    }else{

        alert('Usuário ou senha inválidos');
    }
}