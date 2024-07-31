'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Value } from '@radix-ui/react-select';

const Login: React.FC = () => {
  // Estado local para manejar el email y la contraseña
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    
  };

  // Manejo de envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      console.error('Email and password are required.');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("esta es la data",data,"esta es el respnse",response)
      if (response.ok) {
        console.log('Login successful:', data);
        // Maneja el éxito (redirección, mensaje, etc.)
      } else {
        console.error('Login failed:', data);
        // Maneja el error (mensaje de error, etc.)
      }
    } catch (error) {
      console.error('An error occurred:', error);
      // Maneja el error
    }
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Manager</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto py-8 px-6 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email and password to access your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={handleEmailChange}
                 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  
                />
              </div>
              <CardFooter>
                <Button className="w-full" type="submit">Sign in</Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Task Manager. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Login;
