/**
 * @file
 * Создан Bender 29.05.2022
 */

class MobileScreen {
    constructor() {
        this.stateName = 'powerOff';
    }

    powerOn() {
        this.stateName = 'screenDisabled';
    }

    touch() {
        if (this.stateName === 'powerOff') {
            return;
        }

        if (this.stateName === 'screenDisabled') {
            this.stateName = 'screenOn';
        }

        this.notify('touch');
    }

    swipe() {
        if (this.stateName !== 'screenOn') {
            return;
        }

        // На событие должно реагировать текущее активное приложение
        this.notify('swipe');
    }
}
