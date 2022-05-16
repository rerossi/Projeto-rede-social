export class FormPost {

    constructor(idForm, idTextarea, idUlPost) {

        //pega os elementos do form
        this.form = document.getElementById(idForm);
        this.textarea = document.getElementById(idTextarea);
        this.ulPost = document.getElementById(idUlPost);
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
                    <strong>Rodrigo</strong>
                    <p>
                        ${time}
                    </p>
                 </div>
            </div>
            <p>
            ${this.textarea.value}
            
            </p>
          
            <div class="actionBtnPost">
            <button type="button" class="filePost " style="background-color: lightcoral;"><img src="./assets/curtir.png" alt="Curtir"><b class="text-white">Curtir</b></button>
            <button type="button" class="filePost mx-5" style="background-color:lightseagreen"><img src="./assets/comentar.png" alt="Comentar"><b class="text-white">Comentar</b></button>
            <button type="button" class="filePost " style="background-color: deepskyblue;"><img src="./assets/compartilhar.png" alt="compartilhar"><b class="text-white">Compartilhar</b></button>
            
            </div>
            `;

                this.ulPost.append(newPost);
                this.textarea.value = '';
            } else {
                alert('Verifique o campo digitado');
            }
        }

        this.onSubmit(handleSubmit)
    }

}

//instancia a classe FormPost
const postForm = new FormPost('formPost', 'textarea', 'posts');