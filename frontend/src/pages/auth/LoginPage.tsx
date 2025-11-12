import { LoginCard } from '@/components/auth/LoginCard';
import { LoginForm } from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { isAuthenticated } from '@/lib/api';

export const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard if already authenticated
    if (isAuthenticated()) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <LoginCard>
          <LoginForm />
        </LoginCard>
      </div>
    </div>
  );
};