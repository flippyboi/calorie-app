import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../shared/components/ui/button';
import { Input } from '../../shared/components/ui/input';

interface LoginFormData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    const onSubmit = (data: LoginFormData) => {
        console.log(data);
        // Здесь будет логика авторизации
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <h1 className="text-2xl font-bold mb-6">Вход</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
                <div className="mb-4">
                    <Input
                        type="email"
                        placeholder="Электронная почта"
                        {...register('email', { required: 'Это поле обязательно' })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>
                <div className="mb-6">
                    <Input
                        type="password"
                        placeholder="Пароль"
                        {...register('password', { required: 'Это поле обязательно' })}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>
                <Button type="submit" className="w-full">
                    Войти
                </Button>
            </form>
        </div>
    );
};

export default Login;
