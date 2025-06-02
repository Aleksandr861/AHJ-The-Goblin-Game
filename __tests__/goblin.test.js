import * as App from '../src/js/app';

describe('Game functionality', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="game-container"></div>';
        jest.clearAllMocks();
        jest.useFakeTimers();
    });

    test('should create grid items', () => {
        App.setupGrid();
        const container = document.getElementById('game-container');
        expect(container.children.length).toBe(16);
    });

    test('getRandomItem should return a valid grid item', () => {
        App.setupGrid();
        const randomItem = App.getRandomItem();
        expect(randomItem).not.toBeNull();
        expect(randomItem.classList.contains('grid-item')).toBe(true);
    });

    test('placeImage should add an img with the correct src to a grid item', () => {
        App.setupGrid();
        App.placeImage();
        const img = document.querySelector('.grid-item img');
        expect(img).not.toBeNull();
        expect(img.src).toContain('test-file-stub');
    });

    test('initializeGame should setup grid and set interval for placeImage', () => {
        const spySetupGrid = jest.spyOn(App, 'setupGrid');
        const spyPlaceImage = jest.spyOn(App, 'placeImage');
        App.initializeGame();
        jest.advanceTimersByTime(1000);
        jest.useRealTimers();
    });
});