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
import { FileText, User } from 'lucide-react';
import { useUser, useDoc, useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { collection, doc, query, where } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
    'Completed': 'default',
    'In Progress': 'secondary',
    'Pending': 'outline',
    'New': 'outline',
    'Contacted': 'secondary',
    'Converted': 'default'
}

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(() => user ? doc(firestore, 'users', user.uid) : null, [firestore, user]);
  const { data: userProfile, isLoading: isProfileLoading } = useDoc(userDocRef);

  const leadsQuery = useMemoFirebase(() => user ? query(collection(firestore, 'leads'), where('userId', '==', user.uid)) : null, [firestore, user]);
  const { data: userLeads, isLoading: areLeadsLoading } = useCollection(leadsQuery);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
        <div className="container mx-auto py-12">
            <Skeleton className="h-12 w-1/4 mb-8" />
            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                    <Skeleton className="h-96 w-full" />
                </div>
                <div>
                    <Skeleton className="h-64 w-full" />
                </div>
            </div>
        </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-8 font-headline text-4xl font-bold">User Dashboard</h1>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText />
                My Service Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Date Submitted</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {areLeadsLoading && (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center">
                            <Skeleton className="h-8 w-full" />
                        </TableCell>
                    </TableRow>
                  )}
                  {userLeads && userLeads.length > 0 ? userLeads.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell>{req.service}</TableCell>
                      <TableCell>{req.createdAt ? format(req.createdAt.toDate(), 'PPP') : 'N/A'}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[req.status] || 'default'}>{req.status}</Badge>
                      </TableCell>
                    </TableRow>
                  )) : !areLeadsLoading && (
                    <TableRow>
                        <TableCell colSpan={3} className="text-center">No service requests found.</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {isProfileLoading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-8 w-3/4" />
                    </div>
                ) : userProfile ? (
                    <>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Name</p>
                            <p>{userProfile.name}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Email</p>
                            <p>{userProfile.email}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Member Since</p>
                            <p>{userProfile.createdAt ? format(userProfile.createdAt.toDate(), 'PPP') : 'N/A'}</p>
                        </div>
                    </>
                ) : (
                    <p>Could not load profile.</p>
                )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
