import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  duration: string;
  participants: number;
  category: string;
  image?: string;
}

const ProgramCard = ({ title, description, duration, participants, category }: ProgramCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-medium transition-all duration-300">
      <div className="h-48 gradient-hero" />
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{participants} enrolled</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="default" className="w-full">Join Program</Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
