/**
 * @file
 * Создан Bender 02.06.2022
 */

class ScreenOnState {
    constructor(screen) {
        this.screen = screen;
    }

    touch() {
        this.screen.subject.notify(this, 'touch');
    }

    swipe() {
        this.screen.subject.notify(this, 'swipe');
    }
}

module.exports = ScreenOnState
