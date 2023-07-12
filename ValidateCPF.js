class ValidateCPF{
    constructor(CPF){
        this.CPF = this.normalizeCPF(CPF);
        this.validate();   
    }

    normalizeCPF(CPF){
        return CPF.replace(/\D+/g, '')
    }

    validate(){
        let sumDigit1=0;
        let sumDigit2=0;
        let restDivision1;
        let restDivision2;
        let countEqual = 0;
 
        if(String(this.CPF).length != 11) {
            return false;
        }

        if(this.CPF === ' '){ 
            return false;
        }

        for(let i=0; i<=10; i++){
            if(this.CPF[0] === this.CPF[i]){
                countEqual++ ;   
            }
        }

        if(countEqual === 11){
            return false;
        }    

        for(let i=0; i<9; i++){
            sumDigit1+= this.CPF[i] * (10 - i);
        }
        
        restDivision1 = (sumDigit1*10)%11;
        
        if(restDivision1 === 10 || restDivision1 === 11){
            restDivision1 = 0;
        }
        
        if(restDivision1 != this.CPF[9]){ 
            return false;
        }
        
        for(let i=0; i<10; i++){
             sumDigit2 += this.CPF[i] * (11 - i);
        }
        
        restDivision2 = (sumDigit2*10)%11;
        
        if(restDivision2 === 10 || restDivision2 === 11){
             restDivision2 = 0;
        }
    
        if(restDivision2 != this.CPF[10]){
            return false;
        }
        return true;
    }

}

