import { MinusIcon, PlusIcon } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
} from './ui/drawer';
import { ResponsiveContainer, Bar, BarChart } from 'recharts';

const data = [
    {
        goal: 400,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
];

export const DrawerDemo = () => {
    const [goal, setGoal] = React.useState(350);

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)));
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Установить цель по калориям</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="w-full max-w-sm mx-auto">
                    <DrawerHeader>
                        <DrawerTitle>Цель по калориям</DrawerTitle>
                        <DrawerDescription>Хз </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8 rounded-full shrink-0"
                                onClick={() => onClick(-10)}
                                disabled={goal <= 200}
                            >
                                <MinusIcon className="w-4 h-4" />
                                <span className="sr-only">Меньше</span>
                            </Button>
                            <div className="flex-1 text-center">
                                <div className="font-bold tracking-tighter text-7xl">{goal}</div>
                                <div className="text-[0.70rem] uppercase text-muted-foreground">
                                    Калорий/день
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="w-8 h-8 rounded-full shrink-0"
                                onClick={() => onClick(10)}
                                disabled={goal >= 400}
                            >
                                <PlusIcon className="w-4 h-4" />
                                <span className="sr-only">Больше</span>
                            </Button>
                        </div>
                        <div className="mt-3 h-[120px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <Bar
                                        dataKey="goal"
                                        style={
                                            {
                                                fill: 'hsl(var(--foreground))',
                                                opacity: 0.9,
                                            } as React.CSSProperties
                                        }
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <DrawerFooter>
                        <Button>Подтвердить</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Отмена</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};
