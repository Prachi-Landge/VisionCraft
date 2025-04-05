
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import AuthLayout from '@/components/auth/AuthLayout';
import RoleSelector from '@/components/auth/RoleSelector';

type Role = 'institution' | 'retailer' | 'customer';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role>('institution');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe, selectedRole });
    // In a real app, you would handle authentication here
    // For now, let's redirect to dashboard
    navigate('/');
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <RoleSelector selectedRole={selectedRole} onRoleChange={setSelectedRole} />

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email or Mobile Number</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="text"
                placeholder="Enter your email or mobile number"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(!!checked)}
              />
              <Label htmlFor="remember" className="text-sm">Remember me</Label>
            </div>
            <Link to="/forgot-password" className="text-sm text-green-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
            Login
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
