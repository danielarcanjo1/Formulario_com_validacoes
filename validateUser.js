class ValidateUser{
    constructor(user){
        Object.defineProperty(this,'user',{
            value: user
        }) 
        
        this.validate();
    }

    validate(){
        const regularExpession = /^[a-zA-Z0-9]+$/;
        const minLength = 3;
        const maxLength = 12;

        if(this.user === ' '){
            return false;
        }

        if(this.user.trim().length < minLength || this.user.trim().length > maxLength){
            return false;
        }
        
        if(!regularExpession.test(this.user)) {
            return false;
        }
        return true;
    }
}

