import { NavItem } from '../lib/types';
import { useLocation } from 'react-router-dom';
import { Flame } from 'lucide-react';

import './styles.css';

export const Header = ({ items }: { items: NavItem[] }) => {
    const { pathname } = useLocation();
    const title = items.find(el => el.to === pathname)?.title;
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 p-4 shadow-sm bg-background header">
            <h1 className="flex items-center gap-2 text-2xl font-bold">
                <Flame fill="hsl(var(--primary))" className="w-6 h-6" />
                Calorie App • {title}
            </h1>
        </header>
    );
};
