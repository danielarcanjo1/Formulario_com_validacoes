class ValidateCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this,'cpfLimpo',{
            value: cpfEnviado.replace(/\D+/g,'')
        }) 
       this.validate()
        
    }

    validate(){
        let somaDezDigitos=0;
        let somaOnzeDigitos=0;
        let resto1;
        let resto2;
        let countDEqual = 0;
 
        if(String(this.cpfLimpo).length != 11) return false;
        
        for(let i =0; i<=10; i++) if(this.cpfLimpo[0] === this.cpfLimpo[i]) countDEqual++    
        if(countDEqual === 11) return false

        for(let i=0; i<9; i++) somaDezDigitos+= this.cpfLimpo[i] * (10 - i);
        resto1 = (somaDezDigitos*10)%11;
        
        if(resto1 === 10 || resto1 === 11) resto1 = 0;
        if(resto1 != this.cpfLimpo[9]) return false;
        
        
        for(let i=0; i<10; i++) somaOnzeDigitos+= this.cpfLimpo[i] * (11 - i);
        resto2 = (somaOnzeDigitos*10)%11;
        
        if(resto2 === 10 || resto2 === 11) resto2 = 0;
        if(resto2 != this.cpfLimpo[10]) return false;
        
        return true;
    }

}

// const validacpf = new ValidateCPF('23968745434')
// console.log(validacpf.validate())

// //070.987.720-03 077.089.694-41

