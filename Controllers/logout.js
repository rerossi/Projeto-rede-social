if(localStorage.getItem('userLogado') == null){
    alert('Você precisa estar logado para acessar essa página')
     window.location.href = 'landingPage.html';
  
  }
  
  
  
  function logout(){
    localStorage.removeItem('userLogado')
    window.location.href = 'formLogin.html';
  
  }