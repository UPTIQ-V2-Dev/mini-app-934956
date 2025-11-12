import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactNode } from 'react';

interface LoginCardProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export const LoginCard = ({ 
  children, 
  title = 'Welcome back',
  description = 'Sign in to your account to continue' 
}: LoginCardProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};