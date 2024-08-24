import { Link, useMatches } from 'react-router-dom';
import { cn } from '../lib/utils';
import { NavItem } from '../lib/types';

export const BottomNav = ({ items }: { items: NavItem[] }) => {
    const [, currentRoute] = useMatches();

    const isActive = (route: string) => route === currentRoute?.pathname;

    return (
        <nav className="fixed bottom-0 left-0 right-0 flex justify-around text-sm bg-secondary">
            {items.map((el, index) => (
                <Link
                    className={cn(
                        'flex flex-col items-center text-wrap max-w-[20%] text-center font-semibold justify-center leading-none p-2',
                        isActive(el.to) && 'text-primary scale-85',
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
