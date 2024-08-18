import { DrawerDemo } from '@/shared/components/DrawerDemo';
import { Button } from '@/shared/components/ui/button';

export const Main = () => {
    const toggleTheme = () => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                document.body.classList.toggle('dark');
            });
        } else {
            document.body.classList.toggle('dark');
        }
    };

    return (
        <div className="bg-background min-h-[calc(100dvh-72px)]" vaul-drawer-wrapper="">
            <Button onClick={toggleTheme}>toggle theme</Button>
            <section className="">
                Buttons
                <Button variant="default">default</Button>
                <Button variant="destructive">destructive</Button>
                <Button variant="ghost">ghost</Button>
                <Button variant="link">link</Button>
                <Button variant="outline">outline</Button>
                <Button variant="secondary">secondary</Button>
            </section>
            <section>
                <DrawerDemo />
            </section>
        </div>
    );
};
