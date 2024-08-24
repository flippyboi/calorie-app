import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { Calendar, Columns, BookA, ForkKnife, User } from 'lucide-react';
import { NavItem } from '../lib/types';
import { Header } from './Header';

const navItems: NavItem[] = [
    {
        to: '/',
        icon: <Calendar />,
        title: 'Обзор',
    },
    {
        to: '/statistics',
        icon: <Columns />,
        title: 'Статистика',
    },
    {
        to: '/recipes',
        icon: <BookA />,
        title: 'Рецепты',
    },
    {
        to: '/dishes',
        icon: <ForkKnife />,
        title: 'Мои блюда',
    },
    {
        to: '/profile',
        icon: <User />,
        title: 'Мой профиль',
    },
];

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header items={navItems} />
            <main className="flex-1 p-4">
                <Outlet />
            </main>
            <BottomNav items={navItems} />
        </div>
    );
};
