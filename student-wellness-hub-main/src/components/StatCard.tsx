import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
}

const StatCard = ({ icon: Icon, label, value, trend }: StatCardProps) => {
  return (
    <Card className="shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-1">{label}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {trend && (
              <p className="text-sm text-wellness mt-1">
                {trend}
              </p>
            )}
          </div>
          <div className="w-12 h-12 rounded-xl bg-wellness-light flex items-center justify-center">
            <Icon className="w-6 h-6 text-wellness" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
