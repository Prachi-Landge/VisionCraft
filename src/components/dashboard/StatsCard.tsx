
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
    text: string;
  };
  className?: string;
  valueClassName?: string;
}

export function StatsCard({ 
  title, 
  value, 
  icon, 
  change, 
  className,
  valueClassName
}: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className={cn("text-2xl font-bold mt-1", valueClassName)}>{value}</h3>
            
            {change && (
              <div className="flex items-center mt-2">
                <div className={cn(
                  "flex items-center text-xs",
                  change.type === 'increase' ? 'text-green-500' : 'text-red-500'
                )}>
                  <ArrowUp 
                    className={cn(
                      "h-3 w-3 mr-1", 
                      change.type === 'decrease' && "rotate-180"
                    )} 
                  />
                  <span>{change.value}% {change.text}</span>
                </div>
              </div>
            )}
          </div>
          
          {icon && (
            <div className="p-2">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
