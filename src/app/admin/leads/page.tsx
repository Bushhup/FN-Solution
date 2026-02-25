import React, { Suspense } from 'react';
import AllLeadsClientPage from './leads-client-page';
import { Skeleton } from '@/components/ui/skeleton';

function LeadsPageFallback() {
    return (
        <div className="container mx-auto py-12">
            <Skeleton className="h-12 w-1/3 mb-8" />
            <Skeleton className="h-96 w-full" />
        </div>
    );
}

export default function AllLeadsPage() {
    return (
        <Suspense fallback={<LeadsPageFallback />}>
            <AllLeadsClientPage />
        </Suspense>
    );
}
