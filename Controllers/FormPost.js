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
            
            </p>
           
            <img src="${this.postImage.src}" style="width:50%;">
            
           
            <video src="${this.postVideo.src}" controls style="width:50%;">
          
            <div class="actionBtnPost">
            <button type="button" class="filePost " style="background-color: lightcoral;"><img src="./assets/curtir.png" alt="Curtir"><b class="text-white">Curtir</b></button>
            <button type="button" class="filePost mx-5" style="background-color:lightseagreen"><img src="./assets/comentar.png" alt="Comentar"><b class="text-white">Comentar</b></button>
            <button type="button" class="filePost " style="background-color: deepskyblue;"><img src="./assets/compartilhar.png" alt="compartilhar"><b class="text-white">Compartilhar</b></button>
            
            </div>
            `;

                this.ulPost.append(newPost);
                this.textarea.value = '';
                this.postImage.src = '';
                this.postVideo.src = '';
            } else {
                alert('Verifique o campo digitado');
            }
        }

        this.onSubmit(handleSubmit)
    }

}

//instancia a classe FormPost
const postForm = new FormPost('formPost', 'textarea', 'posts', 'uploadImage', 'uploadVideo');


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