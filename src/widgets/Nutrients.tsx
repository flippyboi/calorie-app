import { Card, CardHeader, CardTitle, CardContent } from '@/shared/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Белки', consumed: 80, norm: 100 },
    { name: 'Жиры', consumed: 60, norm: 70 },
    { name: 'Углеводы', consumed: 200, norm: 250 },
    { name: 'Клетчатка', consumed: 25, norm: 30 },
    { name: 'Сахар', consumed: 30, norm: 50 },
    { name: 'Соль', consumed: 5, norm: 6 },
];

export const Nutrients = () => {
    return (
        <Card className="bg-secondary">
            <CardHeader>
                <CardTitle>Нутриенты</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    {data.map(nutrient => (
                        <div key={nutrient.name} className="flex items-center">
                            <div className="relative h-16 min-w-16">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={[
                                                { value: nutrient.consumed },
                                                { value: nutrient.norm - nutrient.consumed },
                                            ]}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={20}
                                            outerRadius={25}
                                            startAngle={90}
                                            endAngle={-270}
                                            dataKey="value"
                                            cornerRadius={10}
                                            stroke="none"
                                        >
                                            <Cell fill="hsl(var(--primary))" />
                                            <Cell fill="hsl(var(--secondary))" />
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-sm font-semibold">
                                        {Math.round((nutrient.consumed / nutrient.norm) * 100)}%
                                    </span>
                                </div>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-semibold">{nutrient.name}</p>
                                <p className="font-semibold text-md text-foreground">
                                    {nutrient.consumed} г
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    из {nutrient.norm} г
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
