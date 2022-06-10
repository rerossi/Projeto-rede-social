// se não tiver logado mostra um alert informando que 
//precisa estar logado e direciona para a landingpage
 
if(localStorage.getItem('userLogado') == null){
    alert('Você precisa estar logado para acessar essa página')
     window.location.href = 'landingPage.html';
  
  }
  
  
  // função de deslogar e remover o usuário logado

  function logout(){
    localStorage.removeItem('userLogado')
    window.location.href = 'formLogin.html';
  
  }