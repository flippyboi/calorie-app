import { Button } from '@/shared/components/ui/button';
import { DatePicker } from '@/shared/components/ui/datepicker';
import { Nutrients } from '@/widgets/Nutrients';
import { OverviewStat } from '@/widgets/OverviewStat';
import { addDays, isSameDay, subDays } from 'date-fns';
import { ChevronLeft, ChevronRight, Flame, GlassWater, Scale } from 'lucide-react';
import React from 'react';

const today = new Date();

export const Main = () => {
    const [date, setDate] = React.useState<Date>(today);
    return (
        <div className="flex flex-col space-y-4">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 py-2 bg-background">
                <Button
                    variant={'outline'}
                    size={'icon'}
                    onClick={() => setDate(prev => subDays(prev, 1))}
                >
                    <ChevronLeft />
                </Button>
                <DatePicker date={date} setDate={setDate} />
                <Button
                    variant={'outline'}
                    size={'icon'}
                    onClick={() => setDate(prev => addDays(prev, 1))}
                    disabled={isSameDay(date, today)}
                >
                    <ChevronRight />
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <OverviewStat
                    goal={2000}
                    title="Потребленные калории"
                    value={2000}
                    icon={<Flame />}
                    unit="ккал"
                />
                <OverviewStat
                    goal={2000}
                    title="Расход калорий"
                    value={2000}
                    icon={<Flame />}
                    unit="ккал"
                />
                <OverviewStat goal={2000} title="Вода" value={1.5} icon={<GlassWater />} unit="л" />
                <OverviewStat goal={2000} title="Вес" value={70} icon={<Scale />} unit="кг" />
            </div>
            <Nutrients />
        </div>
    );
};
