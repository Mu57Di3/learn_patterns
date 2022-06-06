/**
 * @file
 * Создан Bender 02.06.2022
 */

class ScreenDisabledState {
    constructor(screen) {
        this.screen = screen;
    }

    touch() {
        // Включаем экран. В конструктор нужно передать сам экран.
        this.screen.state = new this.screen.states.ScreenOnState(this.screen);
        // Оповещаем текущую программу об активации
        this.screen.subject.notify(this, 'touch');
    }

    swipe() {
        // ничего не происходит
    }
}

module.exports = ScreenDisabledState
