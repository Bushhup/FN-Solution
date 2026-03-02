import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, HandCoins } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: '150+',
      label: 'Happy Customers',
      description: 'Total registered users on our platform.',
    },
    {
      icon: UserCheck,
      value: '200+',
      label: 'Active Engagements',
      description: 'Clients we have actively helped.',
    },
    {
        icon: HandCoins,
        value: '350+',
        label: 'Services Delivered',
        description: 'Successfully completed service requests.',
    },
  ];

  return (
    <section id="stats" className="py-20 sm:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card text-center animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${100 * (index + 1)}ms` }}>
              <CardHeader className="flex flex-col items-center justify-center space-y-2 pb-2">
                <stat.icon className="h-10 w-10 text-primary" />
                <div className="text-4xl font-bold text-glow">
                  {stat.value}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold uppercase">{stat.label}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
