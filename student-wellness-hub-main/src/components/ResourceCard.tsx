import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  category: "mental-health" | "fitness" | "nutrition";
  link?: string;
}

const categoryStyles = {
  "mental-health": "bg-mentalHealth-light text-mentalHealth hover:bg-mentalHealth hover:text-white",
  "fitness": "bg-fitness-light text-fitness hover:bg-fitness hover:text-white",
  "nutrition": "bg-nutrition-light text-nutrition hover:bg-nutrition hover:text-white",
};

const ResourceCard = ({ icon: Icon, title, description, category, link }: ResourceCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 gradient-card border-border/50">
      <CardHeader>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${categoryStyles[category]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="ghost" 
          className="group-hover:translate-x-1 transition-transform duration-300 p-0 h-auto font-semibold text-primary"
        >
          Learn more
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
