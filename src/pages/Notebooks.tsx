
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, User, BookOpen } from 'lucide-react';

// Mock data for schools/NGOs
const organizationsData = [
  {
    id: 1,
    name: 'Hope Foundation School',
    contactPerson: 'John Smith',
    phone: '+91 98765 43210',
    location: '123 Education Street, Mumbai',
    notebooksNeeded: 500,
  },
  {
    id: 2,
    name: 'Bright Future NGO',
    contactPerson: 'Sarah Johnson',
    phone: '+91 98765 43211',
    location: '456 NGO Road, Delhi',
    notebooksNeeded: 300,
  },
  {
    id: 3,
    name: 'Knowledge Tree School',
    contactPerson: 'Michael Brown',
    phone: '+91 98765 43212',
    location: '789 School Lane, Bangalore',
    notebooksNeeded: 200,
  },
  {
    id: 4,
    name: 'Rainbow Kids School',
    contactPerson: 'Emma Wilson',
    phone: '+91 98765 43213',
    location: '321 Rainbow Road, Chennai',
    notebooksNeeded: 400,
  },
  {
    id: 5,
    name: 'Sunshine Academy',
    contactPerson: 'David Lee',
    phone: '+91 98765 43214',
    location: '567 Sun Street, Hyderabad',
    notebooksNeeded: 350,
  },
  {
    id: 6,
    name: 'Children First NGO',
    contactPerson: 'Lisa Chen',
    phone: '+91 98765 43215',
    location: '890 NGO Circle, Pune',
    notebooksNeeded: 250,
  },
  {
    id: 7,
    name: 'Education First',
    contactPerson: 'Robert Clark',
    phone: '+91 98765 43216',
    location: '432 Learn Lane, Kolkata',
    notebooksNeeded: 450,
  },
  {
    id: 8,
    name: 'Rising Stars School',
    contactPerson: 'Maria Garcia',
    phone: '+91 98765 43217',
    location: '765 Star Road, Ahmedabad',
    notebooksNeeded: 300,
  },
];

const Notebooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [typeFilter, setTypeFilter] = useState('All Types');

  // Hardcoded stats
  const stats = {
    notebooksDonated: 12450,
    schoolsSupported: 45,
    targetNotebooks: 25000
  };

  // Filter organizations based on search term
  const filteredOrganizations = organizationsData.filter(org => 
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.contactPerson.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-3">Notebook Donation Program</h1>
          <p className="text-muted-foreground">
            Help provide essential educational materials to students in need. Your donation of notebooks
            can make a significant impact on their learning journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-500">{stats.notebooksDonated.toLocaleString()}</div>
              <p className="text-muted-foreground">Notebooks Donated</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-500">{stats.schoolsSupported}</div>
              <p className="text-muted-foreground">Schools Supported</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-500">{stats.targetNotebooks.toLocaleString()}</div>
              <p className="text-muted-foreground">Target Notebooks</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="w-full sm:w-auto flex-1">
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select 
              className="border rounded-md px-4 py-2 bg-background"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option>All Locations</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
              <option>Chennai</option>
            </select>
            <select 
              className="border rounded-md px-4 py-2 bg-background"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option>All Types</option>
              <option>School</option>
              <option>NGO</option>
            </select>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredOrganizations.map((org) => (
            <OrganizationCard key={org.id} organization={org} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

// Organization Card Component
const OrganizationCard = ({ organization }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4">{organization.name}</h3>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <User className="h-4 w-4 mr-2" />
            <span>{organization.contactPerson}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Phone className="h-4 w-4 mr-2" />
            <span>{organization.phone}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{organization.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>Needed: {organization.notebooksNeeded} notebooks</span>
          </div>
        </div>
        
        <Button className="w-full mt-4 bg-green-500 hover:bg-green-600">
          Donate Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default Notebooks;
