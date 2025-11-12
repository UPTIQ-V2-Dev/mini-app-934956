import { toast } from 'sonner';

export const useToast = () => {
  return {
    toast: (props: {
      title?: string;
      description?: string;
      variant?: 'default' | 'destructive' | 'success';
      duration?: number;
    }) => {
      const { title, description, variant = 'default', duration } = props;
      
      const message = title && description ? `${title}: ${description}` : title || description || '';
      
      switch (variant) {
        case 'destructive':
          return toast.error(message, { duration });
        case 'success':
          return toast.success(message, { duration });
        default:
          return toast(message, { duration });
      }
    },
  };
};