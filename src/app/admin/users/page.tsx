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
import { useUser, useCollection, useFirestore, useMemoFirebase, updateDocumentNonBlocking, useDoc } from '@/firebase';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

export default function AllUsersPage() {
    const { user, isUserLoading } = useUser();
    const router = useRouter();
    const firestore = useFirestore();

    const userProfileRef = useMemoFirebase(() => (user ? doc(firestore, 'users', user.uid) : null), [firestore, user]);
    const { data: userProfile, isLoading: isProfileLoading } = useDoc(userProfileRef);

    useEffect(() => {
        if (!isUserLoading && !user) {
          router.push('/login');
        }
    }, [user, isUserLoading, router]);

    const usersQuery = useMemoFirebase(() => {
        if (userProfile?.role !== 'Admin') return null;
        return query(collection(firestore, 'users'), orderBy('createdAt', 'desc'));
    }, [firestore, userProfile]);

    const { data: users, isLoading: areUsersLoading } = useCollection(usersQuery);

    const handleRoleChange = (userId: string, newRole: 'Admin' | 'User') => {
        if (!firestore || !user || userId === user.uid) return; // Prevent self-demotion
        const targetUserDocRef = doc(firestore, 'users', userId);
        updateDocumentNonBlocking(targetUserDocRef, { role: newRole });
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
              <h1 className="text-4xl font-bold text-destructive">Access Denied</h1>
              <p className="mt-4 text-lg text-muted-foreground">You do not have the required permissions to view this page.</p>
              <Button asChild className="mt-8">
                <Link href="/dashboard">Return to Dashboard</Link>
              </Button>
            </div>
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
                                <TableHead><span className="sr-only">Actions</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {areUsersLoading && Array.from({ length: 10 }).map((_, i) => (
                                <TableRow key={i}><TableCell colSpan={5}><Skeleton className="h-8 w-full" /></TableCell></TableRow>
                            ))}
                            {users && users.length > 0 ? users.map((u) => (
                                <TableRow key={u.id}>
                                    <TableCell className="font-medium">{u.name}</TableCell>
                                    <TableCell>{u.email}</TableCell>
                                    <TableCell>{u.role}</TableCell>
                                    <TableCell>{u.createdAt ? format(u.createdAt.toDate(), 'PP') : 'N/A'}</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost" disabled={u.id === user?.uid}>
                                                    <MoreHorizontal className="h-4 w-4" /><span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Change Role</DropdownMenuLabel>
                                                {u.role !== 'Admin' && (
                                                    <DropdownMenuItem onClick={() => handleRoleChange(u.id, 'Admin')}>
                                                        Make Admin
                                                    </DropdownMenuItem>
                                                )}
                                                {u.role === 'Admin' && (
                                                    <DropdownMenuItem onClick={() => handleRoleChange(u.id, 'User')}>
                                                        Make User
                                                    </DropdownMenuItem>
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            )) : !areUsersLoading && (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">No users found.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
