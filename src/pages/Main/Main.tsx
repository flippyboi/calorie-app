export const Main = () => {
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
                <button className="p-2 bg-primary text-white rounded">&lt;</button>
                <span className="text-lg font-semibold">Сегодня</span>
                <button className="p-2 bg-primary text-white rounded">&gt;</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary p-4 rounded">
                    <h2 className="text-lg font-semibold">Потребленные калории</h2>
                    <p>1500 ккал</p>
                </div>
                <div className="bg-secondary p-4 rounded">
                    <h2 className="text-lg font-semibold">Расход калорий</h2>
                    <p>2000 ккал</p>
                </div>
                <div className="bg-secondary p-4 rounded">
                    <h2 className="text-lg font-semibold">Вода</h2>
                    <p>Выпито: 1.5 л</p>
                </div>
                <div className="bg-secondary p-4 rounded">
                    <h2 className="text-lg font-semibold">Вес</h2>
                    <p>Текущий: 70 кг</p>
                </div>
            </div>

            <div className="bg-secondary p-4 rounded">
                <h2 className="text-lg font-semibold mb-2">Нутриенты</h2>
                <div className="grid grid-cols-3 gap-2">
                    <p>Белки: 80 г</p>
                    <p>Жиры: 60 г</p>
                    <p>Углеводы: 200 г</p>
                    <p>Клетчатка: 25 г</p>
                    <p>Сахар: 30 г</p>
                    <p>Соль: 5 г</p>
                </div>
            </div>
        </div>
    );
};
