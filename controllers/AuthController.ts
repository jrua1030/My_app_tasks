
import { NextApiRequest, NextApiResponse } from 'next';
import { AuthService } from '../services/AuthService';

const authService = new AuthService();

const AuthController = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (email && password) {
      const isAuthenticated = authService.authenticate(email, password);

      if (isAuthenticated) {
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.status(400).json({ message: 'Email and password are required' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default AuthController;
