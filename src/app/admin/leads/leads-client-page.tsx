'use client';

import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
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
import { FileText, MoreHorizontal, CheckCircle, Clock, FilePlus, Loader, XCircle } from 'lucide-react';
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
import { collection, doc, orderBy, query, where } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

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

export default function AllLeadsClientPage() {
    const { user, isUserLoading } = useUser();
    const router = useRouter();
    const searchParams = useSearchParams();
    const firestore = useFirestore();

    const userProfileRef = useMemoFirebase(() => (user ? doc(firestore, 'users', user.uid) : null), [firestore, user]);
    const { data: userProfile, isLoading: isProfileLoading } = useDoc(userProfileRef);

    const statusFilter = searchParams.get('status');

    useEffect(() => {
        if (!isUserLoading && !user) {
          router.push('/login');
        }
    }, [user, isUserLoading, router]);

    const leadsQuery = useMemoFirebase(() => {
        if (userProfile?.role !== 'Admin') return null;
        const baseQuery = collection(firestore, 'leads');
        if (statusFilter) {
            return query(baseQuery, where('status', '==', statusFilter), orderBy('createdAt', 'desc'));
        }
        return query(baseQuery, orderBy('createdAt', 'desc'));
    }, [firestore, userProfile, statusFilter]);

    const { data: leads, isLoading: areLeadsLoading } = useCollection(leadsQuery);

    const handleStatusChange = (leadId: string, status: string) => {
        if (!firestore) return;
        const leadRef = doc(firestore, 'leads', leadId);
        updateDocumentNonBlocking(leadRef, { status });
    };

    if (isUserLoading || isProfileLoading) {
        return (
          <div className="container mx-auto py-12">
            <Skeleton className="h-12 w-1/3 mb-8" />
            <Skeleton className="h-96 w-full" />
          </div>
        );
    }

    if (userProfile?.role !== 'Admin') {
        return (
          <div className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center">
            <div>
              <h1 className="text-4xl font-bold text-destructive uppercase">Access Denied</h1>
              <p className="mt-4 text-lg text-muted-foreground">You do not have the required permissions to view this page.</p>
              <Button asChild className="mt-8">
                <Link href="/dashboard">Return to Dashboard</Link>
              </Button>
            </div>
          </div>
        );
    }
      
    return (
        <div className="container mx-auto py-12 animate-in fade-in duration-500">
            <div className="mb-8">
                <Button variant="outline" asChild>
                    <Link href="/admin">&larr; Back to Dashboard</Link>
                </Button>
            </div>
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle className="uppercase">
                        {statusFilter ? `${statusFilter} Leads` : 'All Leads'}
                    </CardTitle>
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
                            {areLeadsLoading && Array.from({ length: 10 }).map((_, i) => (
                                <TableRow key={i}><TableCell colSpan={5}><Skeleton className="h-8 w-full" /></TableCell></TableRow>
                            ))}
                            {leads && leads.length > 0 ? leads.map((lead) => (
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
                                    <TableCell>{lead.createdAt ? format(lead.createdAt.toDate(), 'PP') : 'N/A'}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                <MoreHorizontal className="h-4 w-4" /><span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuSub>
                                                    <DropdownMenuSubTrigger><span>Edit Status</span></DropdownMenuSubTrigger>
                                                    <DropdownMenuPortal>
                                                        <DropdownMenuSubContent>
                                                            {leadStatuses.map(status => (
                                                                <DropdownMenuItem key={status} onClick={() => handleStatusChange(lead.id, status)}>{status}</DropdownMenuItem>
                                                            ))}
                                                        </DropdownMenuSubContent>
                                                    </DropdownMenuPortal>
                                                </DropdownMenuSub>
                                                <DropdownMenuItem disabled>View Details</DropdownMenuItem>
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
        </div>
    );
}
