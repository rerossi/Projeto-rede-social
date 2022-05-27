 class FormPost {

     constructor(idForm, idTextarea, idUlPost, idPostImage, idPostVideo) {

         //pega os elementos do form
         this.form = document.getElementById(idForm);
         this.textarea = document.getElementById(idTextarea);
         this.ulPost = document.getElementById(idUlPost);
         this.postImage = document.getElementById(idPostImage);
         this.postVideo = document.getElementById(idPostVideo);
         this.addSubmit();
     }

     onSubmit(func) {

         this.form.addEventListener('submit', func);


     }

     formValidate(value) {
         //valida os valores do campo texto para publicação
         if (value === '' || value === null || value === undefined || value.length < 3) {
             return false
         }
         return true
     }

     //pega a hora atual
     getTime() {
         const time = new Date();
         const hour = time.getHours();
         const minutes = time.getMinutes();
         return `${hour}h ${minutes}min`;
     }

     findMYCity (){
        const status = document.querySelector('status');
       const success = (position) =>{
           const latitude = position.coords.latitude;
           const longitude = position.coords.longitude;
    
           const geoApiUrl = `https://api.bigdatacloud.net/data/
           reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    
           fetch(geoApiUrl)
           .then(res => res.json())
           .then(data => {
               status.textContent = data.principalSubdivision
           })
       }
    
       const error = () =>{
           status.textContent = 'Não foi possível achar a sua localização';
       }
    
       navigator.geolocation.getCurrentPosition(success, error);
    }

    

     addSubmit() {

         const handleSubmit = (event) => {

             event.preventDefault();
             if (this.formValidate(this.textarea.value)) {

                 const time = this.getTime();

                 const find = this.findMYCity();

                 //cria um novo post
                 const newPost = document.createElement('li');
                 //adciona um css style
                 newPost.classList.add('post');

                 //mostra um elemento Html
                 newPost.innerHTML = `
            <div class="infoUserPost">
                <div class="imgUserPost"></div>
                <div class="nameAndHour">
                    <strong>${userLogado.fullName}</strong>
                    <p>
                        ${time}
                    </p>
                    <p id="status">${console.log(find)}<p>
                 </div>
            </div>
            <p>
            ${this.textarea.value}
            
            </p>`;

                 console.log("Image:" + this.postImage.mostrar)
                 if (this.postImage.mostrar)
                     newPost.innerHTML += `<img src="${this.postImage.src}" style="width:30%;">`;
                 console.log("Video:" + this.postVideo.mostrar)
                 if (this.postVideo.mostrar)
                     newPost.innerHTML += `<video src="${this.postVideo.src}" controls style="width:30%;">`;

                 newPost.innerHTML += `<div class="actionBtnPost">
            <button type="button" class="filePost " style="background-color: lightcoral;"><img src="./assets/curtir.png" alt="Curtir"><b class="text-white">Curtir</b></button>
            <button type="button" class="filePost mx-5" style="background-color:lightseagreen"><img src="./assets/comentar.png" alt="Comentar"><b class="text-white">Comentar</b></button>
            <button type="button" class="filePost " style="background-color: deepskyblue;"><img src="./assets/compartilhar.png" alt="compartilhar"><b class="text-white">Compartilhar</b></button>
            
            </div>
            `;

                 this.ulPost.append(newPost);
                 this.textarea.value = '';
                 this.postImage.src = null;
                 this.postImage.mostrar = false;
                 this.postVideo.src = null;
                 this.postVideo.mostrar = false;
             } else {
                 alert('Verifique o campo digitado');
             }
         }

         this.onSubmit(handleSubmit)
     }

 }



 //instancia a classe FormPost
 const postForm = new FormPost('formPost', 'textarea', 'posts', 'uploadImage', 'uploadVideo');

 const flImage = document.querySelector("#flImage");
 const flVideo1 = document.querySelector("#flVideo");
 flImage.mostrar = false;
 flVideo1.mostrar = false;

 flImage.addEventListener("change", function() {
     const reader = new FileReader();
     reader.addEventListener("load", () => {
         const uploaded_image = reader.result;
         document.querySelector("#uploadImage").mostrar = true;
         document.querySelector("#uploadImage").src = uploaded_image;
     });
     reader.readAsDataURL(this.files[0]);
 });

 flVideo1.addEventListener("change", function() {
     const reader = new FileReader();
     reader.addEventListener("load", () => {
         const uploaded_video = reader.result;
         document.querySelector("#uploadVideo").mostrar = true;
         document.querySelector("#uploadVideo").src = uploaded_video;
     });
     reader.readAsDataURL(this.files[0]);
 });


 let userLogado = JSON.parse(localStorage.getItem('userLogado'))

 let logado = document.querySelector('#logado')

 let postName = document.querySelector('#postName')

 logado.innerHTML = `Olá ${userLogado.fullName}`
 postName.innerHTML = `${userLogado.fullName}`

 let photo = document.getElementById('imgPhoto');
 let file = document.getElementById('flImage');

 photo.addEventListener('click', () => {
     file.click();
 });

 let myVideo = document.getElementById('myVideo');
 let flVideo = document.getElementById('flVideo');

 myVideo.addEventListener('click', () => {
     flVideo.click();
 });

 //geolocalização do usuário

   
 