class ValidForm{
    constructor(){
        this.form = document.querySelector('.formulario');
        this.events();
        this.vali
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
        for(let errorMessage of this.form.querySelectorAll('.error-message')){
            errorMessage.remove();
        }
        for(let field of this.form.querySelectorAll('.isValid')){
            const label = field.previousElementSibling.innerHTML;
            if(!field.value){
                this.errorMessage(field,`campo ${label} em branco`); 
                check = false;
            }
            if(field.classList.contains('CPF')){
            //    let check1 = new ValidateCPF(field.value)
            //    console.log(check1.validate())
            //    console.log('tem classe CPF')
            //    console.log(field)
            //    console.log(field.value)
            if(this.cpfIsValid(field.value)){
                console.log('CPF valido')
            }else{
                console.log('CPF INVALIDO')
            }
            }
        }
        
    }

    errorMessage(field, message){
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('error-message');
        field.insertAdjacentElement('afterend', div);
    }

    cpfIsValid(novocpf){
        const check = new ValidateCPF(novocpf)
        return check.validate()
    }
    
    
}
const form = new ValidForm();