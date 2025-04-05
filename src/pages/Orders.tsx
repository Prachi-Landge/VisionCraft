
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Package, Users, CheckCircle, Store, Plus, Search, ChevronDown } from 'lucide-react';

// Mock data for the orders
const mockOrders = [
  {
    id: '#ORD-2024',
    date: 'Jan 15, 2024',
    customer: 'John Smith (Retailer)',
    type: 'Premium Hardcover',
    price: '$49.99',
    status: 'Pending'
  },
  {
    id: '#ORD-2023',
    date: 'Jan 15, 2024',
    customer: 'Sarah Johnson (Retailer)',
    type: 'Spiral Premium',
    price: '$39.99',
    status: 'Approved'
  },
  {
    id: '#ORD-2022',
    date: 'Jan 14, 2024',
    customer: 'Michael Brown (Customer)',
    type: 'Classic Hardcover',
    price: '$44.99',
    status: 'Completed'
  }
];

// Stats data
const stats = [
  {
    title: 'Customer Orders',
    value: 24,
    icon: <Package className="h-5 w-5 text-green-500" />
  },
  {
    title: 'Retailer Orders',
    value: 12,
    icon: <Store className="h-5 w-5 text-blue-500" />
  },
  {
    title: 'Total Orders',
    value: 284,
    icon: <CheckCircle className="h-5 w-5 text-green-500" />
  },
  {
    title: 'Active Retailers',
    value: 18,
    icon: <Users className="h-5 w-5 text-purple-500" />
  }
];

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
      {status}
    </span>
  );
};

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Manage Orders</h1>
            <p className="text-muted-foreground">View and manage orders from customers and retailers</p>
          </div>
          <Button className="bg-green-500 hover:bg-green-600">
            <Plus className="mr-1 h-4 w-4" /> New Order
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <h2 className="text-2xl font-bold mt-1">{stat.value}</h2>
                </div>
                <div className="rounded-full p-2 bg-background">
                  {stat.icon}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search orders..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center">
              All Order Types <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" className="flex items-center">
              All Types <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.id}</div>
                      <div className="text-sm text-muted-foreground">{order.date}</div>
                    </div>
                  </TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.type}</TableCell>
                  <TableCell>{order.price}</TableCell>
                  <TableCell>
                    <StatusBadge status={order.status} />
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-between px-4 py-2 border-t">
            <div className="text-sm text-muted-foreground">
              Showing 1 to 3 of 24 results
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Orders;
