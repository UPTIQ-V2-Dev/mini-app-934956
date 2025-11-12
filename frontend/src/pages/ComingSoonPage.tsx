import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

interface ComingSoonPageProps {
  title?: string;
  description?: string;
  feature?: string;
}

export const ComingSoonPage = ({ 
  title = 'Coming Soon',
  description = 'This feature is currently under development',
  feature = 'page'
}: ComingSoonPageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
              <Construction className="h-6 w-6 text-muted-foreground" />
            </div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              We're working on implementing the {feature} functionality. Please check back later.
            </p>
            <Button asChild className="w-full">
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};