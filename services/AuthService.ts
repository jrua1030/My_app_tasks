const authService = {
  authenticate(email: string, password: string): boolean {
    // Aquí puedes implementar la lógica de autenticación real
    // Por ahora, estamos usando un ejemplo "quemado"
    const mockEmail = 'juandavidruaisaza@gmail.com';
    const mockPassword = '1234567';

    return email === mockEmail && password === mockPassword;
  },
};

export default authService;
