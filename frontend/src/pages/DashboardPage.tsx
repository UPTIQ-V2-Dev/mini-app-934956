import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { authService } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { getStoredUser } from '@/lib/api';
import { LogOut, User } from 'lucide-react';

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const user = getStoredUser();

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      toast({
        title: 'Logged out successfully',
        description: 'You have been logged out of your account.',
      });
      navigate('/login');
    },
    onError: () => {
      toast({
        title: 'Logout failed',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{user?.name || 'User'}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                disabled={logoutMutation.isPending}
              >
                <LogOut className="h-4 w-4 mr-2" />
                {logoutMutation.isPending ? 'Logging out...' : 'Logout'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>
                You have successfully logged in to the Mini App
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a basic dashboard implementation. More features will be added based on the project plan.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>
                Manage your account settings and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm"><strong>Name:</strong> {user?.name || 'N/A'}</p>
                <p className="text-sm"><strong>Email:</strong> {user?.email || 'N/A'}</p>
                <p className="text-sm"><strong>Role:</strong> {user?.role || 'N/A'}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Access frequently used features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full" disabled>
                  Profile Settings (Coming Soon)
                </Button>
                <Button variant="outline" size="sm" className="w-full" disabled>
                  Items Management (Coming Soon)
                </Button>
                <Button variant="outline" size="sm" className="w-full" disabled>
                  Settings (Coming Soon)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};