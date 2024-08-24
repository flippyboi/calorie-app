import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";

const Profile = () => {
    return (
        <div className="flex flex-col space-y-4">
            <Card>
                <CardContent className="flex flex-col pt-6">
                    <p>
                        <strong>Никнейм:</strong> ИмяПользователя
                    </p>
                    <p>
                        <strong>Email:</strong> user@example.com
                    </p>
                    <p>
                        <strong>ИМТ:</strong> 22.5
                    </p>
                </CardContent>
            </Card>

            <Button variant="default">Изменить пароль</Button>

            <Button variant="secondary">Выйти из аккаунта</Button>

            <Button variant="destructive">Удалить аккаунт</Button>
        </div>
    );
};

export default Profile;