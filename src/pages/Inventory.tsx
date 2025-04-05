
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Package,
  Pencil,
  Plus,
  ArrowUp,
  ArrowDown,
  Trash2,
  RefreshCw,
  Download
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

// Mock data for inventory items
const inventoryItems = [
  {
    name: 'Small Notebooks',
    count: 247,
    change: { type: 'increase', value: 12 }
  },
  {
    name: 'Big Notebooks',
    count: 183,
    change: { type: 'decrease', value: 8 }
  },
  {
    name: 'Thin Notebooks',
    count: 156,
    change: { type: 'same', value: 0 }
  }
];

// Notebook types for the dropdown
const notebookTypes = ['Small Notebooks', 'Big Notebooks', 'Thin Notebooks'];

const Inventory = () => {
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedNotebookType, setSelectedNotebookType] = useState('Small Notebooks');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [activeItemForEdit, setActiveItemForEdit] = useState<string | null>(null);

  const handleOpenUpdateModal = (itemName: string) => {
    setSelectedNotebookType(itemName);
    setActiveItemForEdit(itemName);
    setIsUpdateModalOpen(true);
  };

  const handleUpdate = () => {
    console.log('Updating inventory', {
      type: selectedNotebookType,
      quantity,
      notes
    });
    setIsUpdateModalOpen(false);
    setQuantity('');
    setNotes('');
    setActiveItemForEdit(null);
  };

  const getChangeText = (change: { type: string, value: number }) => {
    if (change.type === 'increase') {
      return `${change.value}% from last month`;
    } else if (change.type === 'decrease') {
      return `${change.value}% from last month`;
    } else {
      return 'Same as last month';
    }
  };

  const getChangeIcon = (type: string) => {
    if (type === 'increase') {
      return <ArrowUp className="h-3 w-3 text-green-500" />;
    } else if (type === 'decrease') {
      return <ArrowDown className="h-3 w-3 text-red-500" />;
    } else {
      return <span className="text-gray-400">—</span>;
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Inventory Management</h1>
          </div>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            <Plus className="mr-1 h-4 w-4" /> Add New Item
          </Button>
        </div>

        {/* Inventory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {inventoryItems.map((item) => (
            <Card key={item.name} className="bg-white">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-md font-medium">{item.name}</p>
                    <div className="flex items-center mt-1 text-xs text-muted-foreground">
                      {getChangeIcon(item.change.type)}
                      <span className="ml-1">{getChangeText(item.change)}</span>
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    item.count > 200 ? 'text-green-500' : 
                    item.count > 150 ? 'text-blue-500' : 'text-gray-900'
                  }`}>
                    {item.count}
                  </h3>
                </div>
                <div className="mt-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-emerald-500 hover:text-emerald-600 p-0 h-auto"
                    onClick={() => handleOpenUpdateModal(item.name)}
                  >
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Update Form Section */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Update Notebook</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="notebookType" className="block text-sm font-medium text-gray-700 mb-1">
                  Notebook Type
                </label>
                <Select defaultValue={selectedNotebookType} onValueChange={setSelectedNotebookType}>
                  <SelectTrigger id="notebookType" className="w-full">
                    <SelectValue placeholder="Select notebook type" />
                  </SelectTrigger>
                  <SelectContent>
                    {notebookTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <Input 
                  id="quantity" 
                  placeholder="Enter quantity" 
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Notes
                </label>
                <Textarea 
                  id="notes" 
                  placeholder="Add any additional notes" 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-emerald-500 hover:bg-emerald-600" onClick={handleUpdate}>Update</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6 flex items-center">
                <div className="mr-4 p-2 bg-emerald-100 rounded-md">
                  <Pencil className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Update Quantity</h3>
                  <p className="text-sm text-muted-foreground">Modify stock levels for any item</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex items-center">
                <div className="mr-4 p-2 bg-red-100 rounded-md">
                  <Trash2 className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Remove Old Entries</h3>
                  <p className="text-sm text-muted-foreground">Clean up outdated inventory items</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* System Status */}
        <Card className="mt-4">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">System Status</h2>
              <div className="flex items-center text-sm">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                <span>All systems operational</span>
              </div>
            </div>
            
            <div className="flex justify-between mt-4 text-sm text-muted-foreground">
              <div>Last updated: Today at 14:32</div>
              <div>Total items: 3</div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button variant="outline" size="sm" className="mr-2">
                <RefreshCw className="h-4 w-4 mr-1" /> Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" /> Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Update Modal */}
        <Dialog open={isUpdateModalOpen} onOpenChange={setIsUpdateModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update {activeItemForEdit}</DialogTitle>
              <DialogDescription>
                Make changes to the inventory quantity for this item.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="modal-quantity" className="text-sm font-medium">
                  New Quantity
                </label>
                <Input
                  id="modal-quantity"
                  placeholder="Enter new quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="modal-notes" className="text-sm font-medium">
                  Notes
                </label>
                <Textarea
                  id="modal-notes"
                  placeholder="Add any notes about this change"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsUpdateModalOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600" onClick={handleUpdate}>
                Update
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Inventory;
