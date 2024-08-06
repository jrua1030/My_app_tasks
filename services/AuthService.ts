// src/services/AuthService.ts
export class AuthService {
    private validEmail: string = 'juandavidruaisaza@gmail.com';
    private validPassword: string = '1234567';
  
    authenticate(email: string, password: string): boolean {
      return email === this.validEmail && password === this.validPassword;
    }
  }
  