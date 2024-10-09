// Файл для настроек приложения
const TIMEOUT = 800;
const AppRoute = {
    Game: 'game',
    Results: 'results',
    Initial: 'initial',
};
const GAME_TYPES = [
    { type: 'cats', icon: 'ico-button-cats', label: 'Котики' },
    { type: 'flowers', icon: 'ico-button-flowers', label: 'Цветочки' },
    { type: 'cars', icon: 'ico-button-cars', label: 'Машины' },
];

const RANDOMIZED = true;
window.TIMEOUT = TIMEOUT;
window.AppRoute = AppRoute;
window.GAME_TYPES = GAME_TYPES;
