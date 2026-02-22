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

const mockRequests = [
  { id: 'SRV-001', service: 'GST Registration', date: '2023-10-26', status: 'Completed' },
  { id: 'SRV-002', service: 'Income Tax Filing', date: '2023-11-15', status: 'In Progress' },
  { id: 'SRV-003', service: 'Company Registration', date: '2023-12-01', status: 'Pending' },
];

const statusVariant: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
    'Completed': 'default',
    'In Progress': 'secondary',
    'Pending': 'outline',
}

export default function DashboardPage() {
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
                    <TableHead>Request ID</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockRequests.map((req) => (
                    <TableRow key={req.id}>
                      <TableCell className="font-medium">{req.id}</TableCell>
                      <TableCell>{req.service}</TableCell>
                      <TableCell>{req.date}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[req.status] || 'default'}>{req.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
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
              <div>
                <p className="text-sm font-medium text-muted-foreground">Name</p>
                <p>Jane Doe</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>jane.doe@example.com</p>
              </div>
               <div>
                <p className="text-sm font-medium text-muted-foreground">Member Since</p>
                <p>October 20, 2023</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
