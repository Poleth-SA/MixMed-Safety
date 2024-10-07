import { Search, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" variant="outline">
          <Search className="w-4 h-4 mr-2" />
          Check Interactions
        </Button>
        <Button className="w-full" variant="outline">
          <ExternalLink className="w-4 h-4 mr-2" />
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
