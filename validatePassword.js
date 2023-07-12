// class ValidatePassword{
//     constructor(password, repeatPassword){
//         Object.defineProperty(this,'password',{  
//                 value: password     
//         })
//         Object.defineProperty(this,'repeatPassword',{
//             value:repeatPassword
//         })
//         this.validate()
//     }

//     validate(){
//         console.log(this.password, this.repeatPassword)
//         return this.password === this.repeatPassword 
//     }
// }

// const valida = new ValidatePassword('daniel', 'daniel')
// console.log(valida.validate())

function ValidatePassword(password, repeatPassword) {
    this.password = password;
    this.repeatPassword = repeatPassword;
  
    this.validate = function() {
      return this.password === this.repeatPassword;
    };
  }
  
  const valida = new ValidatePassword('daniel', 'daniel');
  console.log(valida.validate());
  