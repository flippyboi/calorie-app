import { Button } from '@/shared/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui/card';
import { ChevronRight } from 'lucide-react';

type OverviewStatProps = {
    title: string;
    value: number;
    icon: React.ReactNode;
    unit: string;
    goal: number;
};

export const OverviewStat = ({ title, value, icon, unit, goal }: OverviewStatProps) => {
    return (
        <Card className="relative flex flex-col justify-between transition-all duration-300 active:scale-[0.97] hover:shadow-md">
            <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-base">
                    <div className="w-5 h-5">{icon}</div>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4 p-4 pt-0">
                <p className="text-xl font-semibold text-primary">
                    {value} {unit}
                </p>
                <p className="opacity-50 text-md text-muted-foreground">
                    цель: {goal} {unit}
                </p>
            </CardContent>
            <Button
                variant="ghost"
                size="icon"
                className="absolute transform -translate-y-1/2 top-1/2 right-2"
            >
                <ChevronRight className="w-8 h-8" />
            </Button>
        </Card>
    );
};
