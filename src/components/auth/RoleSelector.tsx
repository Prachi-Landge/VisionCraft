
import React from 'react';
import { Building2, Store, User } from 'lucide-react';

type Role = 'institution' | 'retailer' | 'customer';

interface RoleSelectorProps {
  selectedRole: Role;
  onRoleChange: (role: Role) => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onRoleChange }) => {
  const roles: { id: Role; label: string; icon: React.ReactNode }[] = [
    { id: 'institution', label: 'Institution', icon: <Building2 className="h-5 w-5" /> },
    { id: 'retailer', label: 'Retailer', icon: <Store className="h-5 w-5" /> },
    { id: 'customer', label: 'Customer', icon: <User className="h-5 w-5" /> },
  ];

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Choose your role:</label>
      <div className="flex gap-3">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`flex-1 border rounded-md p-4 cursor-pointer flex flex-col items-center justify-center transition-colors ${
              selectedRole === role.id
                ? 'border-green-500 text-green-500'
                : 'border-gray-200 text-gray-500'
            }`}
            onClick={() => onRoleChange(role.id)}
          >
            {role.icon}
            <span className="mt-1 text-xs">{role.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
