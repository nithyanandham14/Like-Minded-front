import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'student' | 'sme' | 'admin'>('student');

  const handleLogin = () => {
    // Mock login - in real app would authenticate
    if (role === 'sme') {
      navigate('/sme-dashboard');
    } else if (role === 'student') {
      navigate('/student-dashboard');
    } else {
      navigate('/sme-dashboard'); // Admin goes to SME dashboard for demo
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4 sm:p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <h1 className="text-2xl font-bold text-blue-600">LIKEMINDED</h1>
          </div>
          <CardTitle className="text-2xl text-center">Welcome to Likeminded</CardTitle>
          <CardDescription className="text-center">
            Login & Role Selection
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={handleLogin}
          >
            Log In
          </Button>

          <div className="space-y-3">
            <p className="text-center text-sm text-gray-600">Select Your Role:</p>
            <Tabs value={role} onValueChange={(v) => setRole(v as typeof role)} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="sme">SME</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}