class ValidForm{
    constructor(){
        this.form = document.querySelector('.form');
        this.events();
    }

    events(){
        this.form.addEventListener('submit' , event =>{
            this.handleSubmit(event);
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.checkFields();
        console.log('formulario enviado');
      
    }

    checkFields(){
        let check = true;
        for(let errorMessage of this.form.querySelectorAll('.errorMessage')){
            errorMessage.remove();
        }

        for(let field of this.form.querySelectorAll('.isValid')){
            
            const label = field.previousElementSibling.innerHTML;
            
            if(!field.value && !field.classList.contains('CPF') && !field.classList.contains('user')){
                this.errorMessage(field,`campo ${label} em branco`); 
                check = false;
            }
            
            if(field.classList.contains('CPF')){
                if(!this.cpfIsValid(field.value)){
                    this.errorMessage(field,'CPF invalido')
                    check = false;
                }
            }
            if(field.classList.contains('user')){
                if(!this.userIsValid(field.value)){
                    this.errorMessage(field,'Uuario deve conter apenas letras e numeros')
                }
            }
        }
    }
    
    errorMessage(field, message){
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('errorMessage');
        field.insertAdjacentElement('afterend', div);
    }

    cpfIsValid(newcpf){
        const check = new ValidateCPF(newcpf)
        return check.validate()
    }  

    userIsValid(newUser){
        const check = new ValidateUser(newUser)
        return check.validate()
    }
}
const form = new ValidForm();