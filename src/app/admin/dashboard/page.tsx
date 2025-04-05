
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { UserStatsCard } from '@/components/dashboard/UserStatsCard';
import { Button } from '@/components/ui/button';
import { NoteIcon, OrderIcon, RevenueIcon } from '@/components/ui/icons';
import { ListFilter } from 'lucide-react';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Stock Cards */}
        <StatsCard
          title="Stock: Thin Notebooks"
          value="847"
          icon={<NoteIcon />}
          change={{
            value: 12,
            type: 'increase',
            text: 'from last month'
          }}
        />
        
        <StatsCard
          title="Stock: Small Notebooks"
          value="932"
          icon={<NoteIcon />}
          change={{
            value: 8,
            type: 'increase',
            text: 'from last month'
          }}
        />
        
        <StatsCard
          title="Stock: Big Notebooks"
          value="768"
          icon={<NoteIcon />}
          change={{
            value: 15,
            type: 'increase',
            text: 'from last month'
          }}
        />
        
        {/* User Stats Card */}
        <UserStatsCard 
          title="Registered Users" 
          stats={[
            { label: 'Colleges', value: 156 },
            { label: 'Retailers', value: 284 },
            { label: 'Customers', value: 1247 }
          ]} 
        />
        
        {/* Orders Card */}
        <StatsCard
          title="Total Orders"
          value="2,156"
          icon={<OrderIcon />}
          change={{
            value: 10,
            type: 'increase',
            text: 'vs last month'
          }}
        />
        
        {/* Revenue Card */}
        <StatsCard
          title="Revenue Generated"
          value="₹3,71,369"
          icon={<RevenueIcon />}
          change={{
            value: 12,
            type: 'increase',
            text: 'vs last month'
          }}
          valueClassName="text-green-500"
        />
      </div>
      
      <div className="mt-auto pt-6 flex justify-end">
        <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
          <ListFilter className="h-4 w-4" />
          Process Orders
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Index;
