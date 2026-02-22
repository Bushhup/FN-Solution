'use client';

import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useUser, useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';

export default function AllUsersPage() {
    const { user, isUserLoading } = useUser();
    const router = useRouter();
    const firestore = useFirestore();

    const isAdmin = useMemo(() => user?.email === 'frank@gmail.com', [user]);

    useEffect(() => {
        if (!isUserLoading && !user) {
          router.push('/login');
        } else if (!isUserLoading && user && !isAdmin) {
          router.push('/dashboard');
        }
    }, [user, isUserLoading, isAdmin, router]);

    const usersQuery = useMemoFirebase(() => {
        if (isUserLoading || !isAdmin) return null;
        return query(collection(firestore, 'users'), orderBy('createdAt', 'desc'));
    }, [firestore, isAdmin, isUserLoading]);

    const { data: users, isLoading: areUsersLoading } = useCollection(usersQuery);

    if (isUserLoading || !isAdmin) {
        return (
          <div className="container mx-auto py-12">
            <Skeleton className="h-12 w-1/3 mb-8" />
            <Skeleton className="h-96 w-full" />
          </div>
        );
    }
      
    return (
        <div className="container mx-auto py-12">
            <div className="mb-8">
                <Button variant="outline" asChild>
                    <Link href="/admin">&larr; Back to Dashboard</Link>
                </Button>
            </div>
            <Card className="glass-card">
                <CardHeader>
                    <CardTitle>All Users</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Date Joined</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {areUsersLoading && Array.from({ length: 10 }).map((_, i) => (
                                <TableRow key={i}><TableCell colSpan={4}><Skeleton className="h-8 w-full" /></TableCell></TableRow>
                            ))}
                            {users && users.length > 0 ? users.map((u) => (
                                <TableRow key={u.id}>
                                    <TableCell className="font-medium">{u.name}</TableCell>
                                    <TableCell>{u.email}</TableCell>
                                    <TableCell>{u.role}</TableCell>
                                    <TableCell>{u.createdAt ? format(u.createdAt.toDate(), 'PP') : 'N/A'}</TableCell>
                                </TableRow>
                            )) : !areUsersLoading && (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center">No users found.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
