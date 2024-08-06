// auth.config.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        // Tu lógica de autenticación
        if (credentials.email === 'juandavidruaisaza@gmail.com' && credentials.password === '1234567') {
          return { id: 1, name: 'Juan David', email: 'juandavidruaisaza@gmail.com' };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authConfig);
