import { NextApiRequest, NextApiResponse } from 'next';
import authService from '@/services/AuthService';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const isAuthenticated = authService.authenticate(email, password);

    if (isAuthenticated) {
      res.status(200).json({ token: 'mock-token' });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
