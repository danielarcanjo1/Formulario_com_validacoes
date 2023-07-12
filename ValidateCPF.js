class ValidateCPF{
    constructor(cpf){
        Object.defineProperty(this,'clearCpf',{
            value: cpf.replace(/\D+/g,'')
        }) 
       this.validate()
        
    }

    validate(){
        let sumTemDigit=0;
        let sumElevenDigit=0;
        let restDivision1;
        let restDivision2;
        let countEqual = 0;
 
        if(String(this.clearCpf).length != 11) return false;

        if(this.clearCpf === ' ') return false;

        for(let i =0; i<=10; i++) if(this.clearCpf[0] === this.clearCpf[i]) countEqual++ ;   
        if(countEqual === 11) return false;

        for(let i=0; i<9; i++) sumTemDigit+= this.clearCpf[i] * (10 - i);
        restDivision1 = (sumTemDigit*10)%11;
        
        if(restDivision1 === 10 || restDivision1 === 11) restDivision1 = 0;
        if(restDivision1 != this.clearCpf[9]) return false;
        
        
        for(let i=0; i<10; i++) sumElevenDigit += this.clearCpf[i] * (11 - i);
        restDivision2 = (sumElevenDigit*10)%11;
        
        if(restDivision2 === 10 || restDivision2 === 11) restDivision2 = 0;
        if(restDivision2 != this.clearCpf[10]) return false;
        
        return true;
    }

}

