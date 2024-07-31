import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (email === 'jrua@abatechnology.com' && password === '1234567') {
      res.status(200).json({ message: 'Login successful!' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
