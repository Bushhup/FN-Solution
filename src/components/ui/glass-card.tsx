import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';

type GlassCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function GlassCard({
  icon: Icon,
  title,
  description,
  className,
}: GlassCardProps) {
  return (
    <Card
      className={cn(
        'glass-card group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10',
        className
      )}
    >
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:h-32 group-hover:w-32 group-hover:bg-accent/20"></div>
      <CardHeader className="relative z-10 flex flex-row items-center gap-4">
        <div className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-accent/15 group-hover:text-accent">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="font-headline text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 text-muted-foreground">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
