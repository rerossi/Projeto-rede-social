 class FormPost {

     constructor(idForm, idTextarea, idUlPost, idPostImage, idPostVideo, idPostAudio) {

         //pega os elementos do form
         this.form = document.getElementById(idForm);
         this.textarea = document.getElementById(idTextarea);
         this.ulPost = document.getElementById(idUlPost);
         this.postImage = document.getElementById(idPostImage);
         this.postVideo = document.getElementById(idPostVideo);
         this.postAudio = document.getElementById(idPostAudio);
         this.posts = [];
         this.addSubmit();

         document.getElementById('posts').innerHTML = localStorage.getItem('posts');
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





     addSubmit() {

         const handleSubmit = (event) => {

             event.preventDefault();
             if (this.formValidate(this.textarea.value)) {

                 const time = this.getTime();



                 //cria um novo post
                 const newPost = document.createElement('li');
                 //adciona um css style
                 newPost.classList.add('post');

                 //mostra um elemento Html
                 newPost.innerHTML = `
                 <details>
            <summary><b><img src="imagens/map.png" style="width:40px; margin-bottom: 10px; margin-right: 5px; ">Sua Localização</b></summary>
                <p><b>Latitude: <span id="latitude"></span>
                      Longitude: <span id="longitude"></span></b></p>
            </details>
            <div class="infoUserPost">
                <div class="imgUserPost"></div>
                <div class="nameAndHour">
                    <strong>${userLogado.fullName}</strong>
                    <p>
                        ${time}
                    </p>
                    
                 </div>
            </div>
            <p>
            ${this.textarea.value}
            
            </p>`;

                // separa o post para postar apenas imagem, video ou audio.
                 if (this.postImage.mostrar)
                     newPost.innerHTML += `<img src="${this.postImage.src}" style="width:30%; margin-bottom: 20px;">`;

                 if (this.postVideo.mostrar)
                     newPost.innerHTML += `<video src="${this.postVideo.src}" controls style="width:30%; margin-bottom: 20px;"></video>`;

                 if (this.postAudio.mostrar)
                     newPost.innerHTML += `<audio src="${this.postAudio.src}" controls style="width:30%; margin-bottom: 20px;"></audio>`;

                 newPost.innerHTML += `<div class="actionBtnPost">
            <button type="button" class="filePost " style="background-color: lightcoral;"><img src="./imagens/curtir.png" alt="Curtir"><b class="text-white">Curtir</b></button>
            <button type="button" class="filePost mx-5" style="background-color:lightseagreen"><img src="./imagens/comentar.png" alt="Comentar"><b class="text-white">Comentar</b></button>
            <button type="button" class="filePost " style="background-color: deepskyblue;"><img src="./imagens/compartilhar.png" alt="compartilhar"><b class="text-white">Compartilhar</b></button>
            
            </div>
            `;

                 this.ulPost.append(newPost);
                 this.textarea.value = '';
                 this.postImage.src = null;
                 this.postImage.mostrar = false;
                 this.postVideo.src = null;
                 this.postVideo.mostrar = false;
                 this.postAudio.src = null;
                 this.postAudio.mostrar = false;

                 this.posts = [...this.posts, '<li class="post">' + newPost.innerHTML + '</li>'];
                 localStorage.setItem('posts', this.posts)

             } else {
                 alert('Verifique o campo digitado');
             }


             document.querySelector(".show-itens").style.display = 'none';
         }
         this.onSubmit(handleSubmit)
         
     }

 }

 //instancia a classe FormPost
 const postForm = new FormPost('formPost', 'textarea', 'posts', 'uploadImage', 'uploadVideo', 'uploadAudio');

 // guarda o usuário logado no localStorage
 
 let userLogado = JSON.parse(localStorage.getItem('userLogado'))
 
 let logado = document.querySelector('#logado')

 let postName = document.querySelector('#postName')


 logado.innerHTML = `Olá ${userLogado.fullName}`
 postName.innerHTML = `${userLogado.fullName}`

 
// evento de clique para o icone de imagem

 let photo = document.getElementById('imgPhoto');
 let file = document.getElementById('flImage');

 photo.addEventListener('click', () => {
     file.click();
 });

 //função upload da imagem
 const flImage = document.querySelector("#flImage");
 flImage.mostrar = false;

 flImage.addEventListener("change", function() {
     const reader = new FileReader();
     reader.addEventListener("load", () => {
         const uploaded_image = reader.result;
         document.querySelector("#uploadImage").mostrar = true;
         document.querySelector("#uploadImage").src = uploaded_image;
         
     });
     reader.readAsDataURL(this.files[0]);
     document.querySelector(".show-itens").style.display = 'block';
 });

 // evento de clique para o icone de video

 let myVideo = document.getElementById('myVideo');
 let fileVideo = document.getElementById('flVideo');


 myVideo.addEventListener('click', () => {
     fileVideo.click();
 });

 //função upload do video

 const flVideo = document.querySelector("#flVideo");
 flVideo.mostrar = false;

 flVideo.addEventListener("change", function() {
     const reader = new FileReader();
     reader.addEventListener("load", () => {
         const uploaded_video = reader.result;
         document.querySelector("#uploadVideo").mostrar = true;
         document.querySelector("#uploadVideo").src = uploaded_video;
     });
     reader.readAsDataURL(this.files[0]);
     document.querySelector(".show-itens").style.display = 'block';
 });


 // evento de clique para icone de audio
 
 let myAudio = document.getElementById('myAudio');
 let fileAudio = document.getElementById('flAudio');


 myAudio.addEventListener('click', () => {
     flAudio.click();
 });

 //função de upload do audio

 const flAudio = document.querySelector("#flAudio");
 flAudio.mostrar = false;

 flAudio.addEventListener("change", function() {
     const reader = new FileReader();
     reader.addEventListener("load", () => {
         const uploaded_audio = reader.result;
         document.querySelector("#uploadAudio").mostrar = true;
         document.querySelector("#uploadAudio").src = uploaded_audio;
     });
     reader.readAsDataURL(this.files[0]);
    
 });


 //geolocalização do usuário

 function getLocation() {
     if ("geolocation" in navigator) {

         //watchPosition
         navigator.geolocation.watchPosition(locationSucess, locationError)
     } else {
         alert("Não existe API de Geolocalização");
     }
 }

 function locationSucess(data) {
     let latitude = data.coords.latitude;
     let longitude = data.coords.longitude;

     document.getElementById("latitude").innerHTML = latitude;
     document.getElementById("longitude").innerHTML = longitude;

     console.log(latitude, longitude);
 }

 function locationError() {
     alert('Localização não encontrada');
 }

 // mostra o diplay de desenho quando clicado

 function mostraDraw() {
    document.getElementById('show-display').style.display = 'block';
}


// função para desenhar com canvas

 const gCanvas = document.querySelector('#drawing-board');
        const toolbar = document.getElementById('toolbar');
        const gCtx = gCanvas.getContext('2d');



        toolbar.addEventListener('click', e => {
            if (e.target.id === 'clear') {
                gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
            }
        });


        function onMouseDown(e) {
            e.preventDefault();
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
        }

        function onMouseMove(e) {
            e.preventDefault();
            gCtx.fillRect(e.offsetX - 4, e.offsetY - 4, 8, 8);
        }

        function onMouseUp(e) {
            e.preventDefault();
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);

        }



        function onSave() {
            gCanvas.toBlob((blob) => {
                const timestamp = Date.now().toString();
                const a = document.createElement('a');
                document.body.append(a);
                a.download = `export-${timestamp}.png`;
                a.href = URL.createObjectURL(blob);
                a.click();
                a.remove();
                toolbar.style.display = 'none';
            });
        }


        gCanvas.addEventListener('mousedown', onMouseDown);
        document.querySelector('#save').addEventListener('click', onSave);