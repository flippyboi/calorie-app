import { Link, useNavigate, useNavigation, useMatch, useMatches } from 'react-router-dom';
import { Button } from './ui/button';
import { BookA, Calendar, Columns, ForkKnife, User } from 'lucide-react';
import { title } from 'process';
import { cn } from '../lib/utils';

const navElements = [
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

export const BottomNav = () => {
    const [, currentRoute] = useMatches();

    const isActive = (route: string) => route === currentRoute?.pathname;

    return (
        <nav className="fixed bottom-0 left-0 right-0 flex justify-around text-sm bg-secondary">
            {navElements.map((el, index) => (
                <Link
                    className={cn(
                        'flex flex-col items-center text-wrap max-w-[20%] text-center justify-center leading-none p-2',
                        isActive(el.to) && 'text-primary',
                    )}
                    key={el.to + index}
                    to={el.to}
                >
                    {el.icon}
                    <span className="flex items-center h-8">{el.title}</span>
                </Link>
            ))}
        </nav>
    );
};
