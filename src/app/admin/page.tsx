'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { FileText, Users, HandCoins, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUser, useDoc, useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
    'Converted': 'default',
    'Contacted': 'secondary',
    'New': 'outline',
}

const analyticsData = [
  { name: 'Jan', leads: 40, users: 24 },
  { name: 'Feb', leads: 30, users: 13 },
  { name: 'Mar', leads: 50, users: 68 },
  { name: 'Apr', leads: 47, users: 39 },
  { name: 'May', leads: 69, users: 48 },
  { name: 'Jun', leads: 58, users: 38 },
];

export default function AdminPage() {
    const { user, isUserLoading } = useUser();
    const router = useRouter();
    const firestore = useFirestore();

    const adminRef = useMemoFirebase(() => user ? doc(firestore, 'roles_admin', user.uid) : null, [firestore, user]);
    const { data: adminDoc, isLoading: isAdminLoading } = useDoc(adminRef);

    const leadsQuery = useMemoFirebase(() => (adminDoc ? collection(firestore, 'leads') : null), [firestore, adminDoc]);
    const { data: leads, isLoading: areLeadsLoading } = useCollection(leadsQuery);

    const usersQuery = useMemoFirebase(() => (adminDoc ? collection(firestore, 'users') : null), [firestore, adminDoc]);
    const { data: users, isLoading: areUsersLoading } = useCollection(usersQuery);

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push('/login');
        } else if (!isUserLoading && user && !isAdminLoading && !adminDoc) {
            router.push('/dashboard'); // Redirect non-admins
        }
    }, [user, isUserLoading, adminDoc, isAdminLoading, router]);

    const totalConversions = useMemo(() => leads?.filter(lead => lead.status === 'Converted').length || 0, [leads]);

    if (isUserLoading || isAdminLoading) {
        return (
            <div className="container mx-auto py-12">
                <Skeleton className="h-12 w-1/3 mb-8" />
                <div className="grid gap-6 md:grid-cols-3 mb-8">
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-32 w-full" />
                </div>
                <Skeleton className="h-96 w-full" />
            </div>
        );
    }
    
    if (!adminDoc) {
        return (
             <div className="container mx-auto flex h-[calc(100vh-4rem)] items-center justify-center">
                <div className="text-center">
                    <h2 className="font-headline text-2xl font-bold">Access Denied</h2>
                    <p className="text-muted-foreground">You do not have permission to view this page. Redirecting...</p>
                </div>
            </div>
        );
    }

  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 font-headline text-4xl font-bold">Admin Panel</h1>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{areLeadsLoading ? <Skeleton className="h-8 w-16" /> : leads?.length || 0}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{areUsersLoading ? <Skeleton className="h-8 w-16" /> : users?.length || 0}</div>
            <p className="text-xs text-muted-foreground">+12.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversions</CardTitle>
            <HandCoins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{areLeadsLoading ? <Skeleton className="h-8 w-16" /> : totalConversions}</div>
            <p className="text-xs text-muted-foreground">+15% this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Card className="glass-card col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead><span className="sr-only">Actions</span></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {areLeadsLoading && Array.from({length: 4}).map((_, i) => (
                    <TableRow key={i}>
                        <TableCell colSpan={5}><Skeleton className="h-8 w-full" /></TableCell>
                    </TableRow>
                  ))}
                  {leads && leads.length > 0 ? leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.service}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[lead.status] || 'default'}>{lead.status}</Badge>
                      </TableCell>
                      <TableCell>{lead.createdAt ? format(lead.createdAt.toDate(), 'PPP') : 'N/A'}</TableCell>
                      <TableCell>
                         <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit Status</DropdownMenuItem>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )) : !areLeadsLoading && (
                    <TableRow>
                        <TableCell colSpan={5} className="text-center">No leads found.</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
          </CardContent>
        </Card>
         <Card className="glass-card col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Leads & User Growth</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted)/0.5)' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                  }}
                />
                <Bar dataKey="leads" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="users" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
