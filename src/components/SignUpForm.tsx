import { useState } from 'react';
import { ArrowLeft, UserPlus, Mail, User } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useKV } from '@github/spark/hooks';
import { toast } from 'sonner';

interface SignUpFormProps {
  onBack: () => void;
}

export function SignUpForm({ onBack }: SignUpFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [users, setUsers] = useKV('registered-users', []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Check if email already exists
      const existingUser = users.find((user: any) => user.email === email);
      if (existingUser) {
        toast.error('Email already registered');
        setIsSubmitting(false);
        return;
      }

      // Add new user
      const newUser = {
        id: Date.now(),
        name,
        email,
        joinedAt: new Date().toISOString(),
      };

      setUsers((currentUsers: any) => [...currentUsers, newUser]);
      
      toast.success(`Welcome to The Philosopher's Atlas, ${name}!`);
      
      // Reset form
      setName('');
      setEmail('');
      
      // Navigate back after a brief delay
      setTimeout(() => {
        onBack();
      }, 1500);
      
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="mb-6 -ml-2"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Atlas
          </Button>
          
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Join the Journey
            </h1>
            <p className="text-lg text-muted-foreground font-reading max-w-xl mx-auto">
              Begin your exploration of philosophical wisdom with a community of fellow seekers
            </p>
          </div>
        </div>

        {/* Sign Up Form */}
        <Card className="mx-auto max-w-md">
          <CardHeader className="text-center pb-6">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <UserPlus size={24} className="text-primary" />
            </div>
            <CardTitle className="font-display text-2xl">Create Your Account</CardTitle>
            <CardDescription className="font-reading">
              Start your philosophical exploration today
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Begin Your Journey'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground font-reading">
                Join {users.length} other seekers exploring the depths of philosophical thought
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mt-12 grid gap-4">
          <h3 className="font-display text-xl text-center mb-6">What You'll Discover</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <User size={16} className="text-primary" />
              </div>
              <h4 className="font-display font-medium mb-1">Curated Wisdom</h4>
              <p className="text-sm text-muted-foreground font-reading">
                Access carefully selected insights from history's greatest minds
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <Mail size={16} className="text-accent" />
              </div>
              <h4 className="font-display font-medium mb-1">Deep Comparisons</h4>
              <p className="text-sm text-muted-foreground font-reading">
                Understand how different philosophers approach the same questions
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <UserPlus size={16} className="text-primary" />
              </div>
              <h4 className="font-display font-medium mb-1">Personal Growth</h4>
              <p className="text-sm text-muted-foreground font-reading">
                Develop your own philosophical understanding through exploration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}