'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, HandCoins } from 'lucide-react';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

export function StatsSection() {
  const firestore = useFirestore();

  const leadsQuery = useMemoFirebase(
    () => (firestore ? collection(firestore, 'leads') : null),
    [firestore]
  );
  const { data: leads, isLoading: areLeadsLoading } = useCollection(leadsQuery);

  const usersQuery = useMemoFirebase(
    () => (firestore ? collection(firestore, 'users') : null),
    [firestore]
  );
  const { data: users, isLoading: areUsersLoading } = useCollection(usersQuery);

  const totalCompletedLeads = useMemo(
    () => leads?.filter((lead) => lead.status === 'Completed').length || 0,
    [leads]
  );

  const activeCustomers = useMemo(
    () => (leads ? new Set(leads.filter(lead => lead.userId).map(lead => lead.userId)).size : 0),
    [leads]
  );
  
  const totalCustomers = users?.length || 0;

  const isLoading = areLeadsLoading || areUsersLoading;

  const stats = [
    {
      icon: Users,
      value: totalCustomers,
      label: 'Happy Customers',
      description: 'Total registered users on our platform.',
      loading: isLoading,
    },
    {
      icon: UserCheck,
      value: activeCustomers,
      label: 'Active Engagements',
      description: 'Clients we have actively helped.',
      loading: isLoading,
    },
    {
        icon: HandCoins,
        value: totalCompletedLeads,
        label: 'Services Delivered',
        description: 'Successfully completed service requests.',
        loading: isLoading,
    },
  ];

  return (
    <section id="stats" className="py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card text-center">
              <CardHeader className="flex flex-col items-center justify-center space-y-2 pb-2">
                <stat.icon className="h-10 w-10 text-primary" />
                <div className="text-4xl font-bold text-glow">
                  {stat.loading ? <Skeleton className="h-10 w-24 mx-auto" /> : stat.value}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold">{stat.label}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
