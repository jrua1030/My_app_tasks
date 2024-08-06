
// Interfaz que define la estructura del inicio de secion 

export interface User {
    email: string;
    pass: string;
  }
  
  export class UserEntity implements User {
    email: string;
    pass: string;
  
 constructor(email: string, pass: string) {
      this.email = email ;
      this.pass =  pass;
    }
  }
  