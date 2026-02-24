'use client';

import React, { useEffect, useMemo } from 'react';
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
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts';
import { FileText, Users, HandCoins, MoreHorizontal, CheckCircle, Clock, FilePlus, Loader, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUser, useCollection, useFirestore, useMemoFirebase, updateDocumentNonBlocking, useDoc } from '@/firebase';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
  'Completed': 'default',
  'In Progress': 'secondary',
  'Pending': 'secondary',
  'New': 'outline',
  'Rejected': 'destructive',
};

const statusIcons: { [key: string]: React.ElementType } = {
  'New': FilePlus,
  'Pending': Clock,
  'In Progress': Loader,
  'Completed': CheckCircle,
  'Rejected': XCircle,
};

const leadStatuses = ['New', 'Pending', 'In Progress', 'Completed', 'Rejected'];

export default function AdminPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(() => (user ? doc(firestore, 'users', user.uid) : null), [firestore, user]);
  const { data: userProfile, isLoading: isProfileLoading } = useDoc(userDocRef);
  const isAdmin = useMemo(() => userProfile?.role === 'Admin', [userProfile]);


  const leadsQuery = useMemoFirebase(
    () => (!isUserLoading && !isProfileLoading && isAdmin ? query(collection(firestore, 'leads'), orderBy('createdAt', 'desc')) : null),
    [firestore, isAdmin, isUserLoading, isProfileLoading]
  );
  const { data: leads, isLoading: areLeadsLoading } = useCollection(leadsQuery);

  const usersQuery = useMemoFirebase(
    () => (!isUserLoading && !isProfileLoading && isAdmin ? query(collection(firestore, 'users'), orderBy('createdAt', 'desc')) : null),
    [firestore, isAdmin, isUserLoading, isProfileLoading]
  );
  const { data: users, isLoading: areUsersLoading } = useCollection(usersQuery);

  useEffect(() => {
    if (!isUserLoading && !isProfileLoading && !user) {
      router.push('/login');
    } else if (!isUserLoading && !isProfileLoading && user && !isAdmin) {
      router.push('/dashboard'); // Redirect non-admins
    }
  }, [user, isUserLoading, isProfileLoading, isAdmin, router]);

  const totalCompletedLeads = useMemo(
    () => leads?.filter((lead) => lead.status === 'Completed').length || 0,
    [leads]
  );

  const latestLead = useMemo(() => leads?.[0], [leads]);
  const latestUser = useMemo(() => users?.[0], [users]);
  const latestCompletedLead = useMemo(
      () => leads?.find((lead) => lead.status === 'Completed'),
      [leads]
  );

  const handleStatusChange = (leadId: string, status: string) => {
    if (!firestore) return;
    const leadRef = doc(firestore, 'leads', leadId);
    updateDocumentNonBlocking(leadRef, { status });
  };
  
  const analyticsData = useMemo(() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = months.map((month) => ({ name: month, leads: 0, users: 0 }));

    const currentYear = new Date().getFullYear();

    leads?.forEach((lead) => {
      if (lead.createdAt) {
        const date = lead.createdAt.toDate();
        if (date.getFullYear() === currentYear) {
          const month = date.getMonth();
          data[month].leads += 1;
        }
      }
    });

    users?.forEach((user) => {
      if (user.createdAt) {
        const date = user.createdAt.toDate();
         if (date.getFullYear() === currentYear) {
            const month = date.getMonth();
            data[month].users += 1;
        }
      }
    });

    return data.slice(0, new Date().getMonth() + 1);
  }, [leads, users]);

  if (isUserLoading || isProfileLoading || !isAdmin) {
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

  return (
    <TooltipProvider>
      <div className="container mx-auto py-12">
        <h1 className="mb-8 font-headline text-4xl font-bold">Admin Panel</h1>

        <div className="mb-8 grid gap-6 md:grid-cols-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/admin/leads">
                <Card className="glass-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {areLeadsLoading ? <Skeleton className="h-8 w-16" /> : leads?.length || 0}
                    </div>
                    <p className="text-xs text-muted-foreground">Click to view all leads.</p>
                  </CardContent>
                </Card>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <h4 className="font-semibold text-sm mb-2">Latest Lead</h4>
              {areLeadsLoading ? <Skeleton className="h-12 w-48" /> : latestLead ? (
                  <div className="text-xs space-y-1">
                      <p><span className="font-semibold">Name:</span> {latestLead.name}</p>
                      <p><span className="font-semibold">Service:</span> {latestLead.service}</p>
                      <p><span className="font-semibold">Date:</span> {format(latestLead.createdAt.toDate(), 'PP')}</p>
                  </div>
              ) : (
                  <p className="text-xs text-muted-foreground">No leads yet.</p>
              )}
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/admin/users">
                <Card className="glass-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {areUsersLoading ? <Skeleton className="h-8 w-16" /> : users?.length || 0}
                    </div>
                    <p className="text-xs text-muted-foreground">Click to view all users.</p>
                  </CardContent>
                </Card>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <h4 className="font-semibold text-sm mb-2">Latest User</h4>
              {areUsersLoading ? <Skeleton className="h-12 w-48" /> : latestUser ? (
                  <div className="text-xs space-y-1">
                      <p><span className="font-semibold">Name:</span> {latestUser.name}</p>
                      <p><span className="font-semibold">Email:</span> {latestUser.email}</p>
                      <p><span className="font-semibold">Joined:</span> {format(latestUser.createdAt.toDate(), 'PP')}</p>
                  </div>
              ) : (
                  <p className="text-xs text-muted-foreground">No users yet.</p>
              )}
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/admin/leads?status=Completed">
                <Card className="glass-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed Leads</CardTitle>
                    <HandCoins className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {areLeadsLoading ? <Skeleton className="h-8 w-16" /> : totalCompletedLeads}
                    </div>
                    <p className="text-xs text-muted-foreground">Click to view completed leads.</p>
                  </CardContent>
                </Card>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <h4 className="font-semibold text-sm mb-2">Latest Completed Lead</h4>
              {areLeadsLoading ? <Skeleton className="h-12 w-48" /> : latestCompletedLead ? (
                  <div className="text-xs space-y-1">
                      <p><span className="font-semibold">Name:</span> {latestCompletedLead.name}</p>
                      <p><span className="font-semibold">Service:</span> {latestCompletedLead.service}</p>
                      <p><span className="font-semibold">Date:</span> {format(latestCompletedLead.createdAt.toDate(), 'PP')}</p>
                  </div>
              ) : (
                  <p className="text-xs text-muted-foreground">No completed leads yet.</p>
              )}
            </TooltipContent>
          </Tooltip>
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
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {areLeadsLoading &&
                    Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell colSpan={5}>
                          <Skeleton className="h-8 w-full" />
                        </TableCell>
                      </TableRow>
                    ))}
                  {leads && leads.length > 0
                    ? leads.slice(0, 10).map((lead) => (
                        <TableRow key={lead.id}>
                          <TableCell className="font-medium">
                            <div>{lead.name}</div>
                            <div className="text-xs text-muted-foreground">{lead.email}</div>
                          </TableCell>
                          <TableCell>{lead.service}</TableCell>
                          <TableCell>
                            <Badge variant={statusVariant[lead.status] || 'default'} className="gap-1 whitespace-nowrap">
                              {React.createElement(statusIcons[lead.status] || FileText, { className: 'h-3 w-3' })}
                              <span>{lead.status}</span>
                            </Badge>
                          </TableCell>
                          <TableCell>
                            {lead.createdAt ? format(lead.createdAt.toDate(), 'PP') : 'N/A'}
                          </TableCell>
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
                                <DropdownMenuSub>
                                  <DropdownMenuSubTrigger>
                                      <span>Edit Status</span>
                                  </DropdownMenuSubTrigger>
                                  <DropdownMenuPortal>
                                      <DropdownMenuSubContent>
                                          {leadStatuses.map(status => (
                                              <DropdownMenuItem key={status} onClick={() => handleStatusChange(lead.id, status)}>
                                                  {status}
                                              </DropdownMenuItem>
                                          ))}
                                      </DropdownMenuSubContent>
                                  </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuItem disabled>View Details</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))
                    : !areLeadsLoading && (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center">
                            No leads found.
                          </TableCell>
                        </TableRow>
                      )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="glass-card col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Leads & User Growth ({new Date().getFullYear()})</CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analyticsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <RechartsTooltip
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
    </TooltipProvider>
  );
}
