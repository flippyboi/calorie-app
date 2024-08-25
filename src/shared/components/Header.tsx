import { NavItem } from '../lib/types';

import { useLocation } from 'react-router-dom';

import './styles.css';

export const Header = ({ items }: { items: NavItem[] }) => {
    const { pathname } = useLocation();
    const title = items.find(el => el.to === pathname)?.title;
    return (
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 p-4 shadow-sm bg-background header">
            <h1 className="text-2xl font-bold">{title}</h1>
        </header>
    );
};
