/**
 * @file Состояние без состояния набор флагов
 * Создан Bender 29.05.2022
 */

class MobileScreen {
    constructor() {
        // В самом начале телефон выключен
        this.powerOn = false;
        this.screenOn = false;
    }

    // Включение питания
    powerOn() {
        this.powerOn = true;
    }

    // Прикосновение
    touch() {
        // Если питание выключено, то ничего не происходит
        if (!this.powerOn) {
            return;
        }

        // Если экран был выключен, то его надо включить
        if (!this.screenOn) {
            this.screenOn = true;
        }

        // На событие должно реагировать текущее активное приложение
        this.notify('touch');
    }

    // Смахивание
    swipe() {
        // Если выключено питание или экран, то ничего не происходит
        if (!this.powerOn || !this.screenOn) {
            return;
        }

        // На событие должно реагировать текущее активное приложение
        this.notify('swipe');
    }
}
