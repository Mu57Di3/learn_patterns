/**
 * @file
 * Создан Bender 29.05.2022
 */

const Subject = require("../observer/SubjectF");

class MobileScreen {
    constructor() {
        // Список состояний нужен для переключений между ними
        // Иначе возможно появление циклических зависимостей внутри состояний
        this.states = {
            PowerOff: PowerOffState,
            ScreenDisabled: ScreenDisabledState,
            ScreenOn: ScreenOnState,
        }
        // Начальное состояние
        // Внутрь передается текущий объект
        // Это нужно для смены состояний (примеры ниже)
        this.state = new this.states.PowerOff(this);
        this.subject = new Subject();
    }

    powerOn() {
        // Предыдущее состояние нас не волнует
        // Все данные хранятся в самом экране
        // Объекты-состояния не имеют своих данных
        this.state = new this.states.ScreenDisabled(this);
        this.subject.notify(this, 'on');
    }

    touch() {
        this.state.touch();
    }

    swipe() {
        this.state.swipe();
    }
}

class PowerOffState {
    constructor(screen) {
        this.screen = screen;
    }

    touch() {
        // ничего не происходит
    }

    swipe() {
        // ничего не происходит
    }
}

class ScreenDisabledState {
    constructor(screen) {
        this.screen = screen;
    }

    touch() {
        // Включаем экран. В конструктор нужно передать сам экран.
        this.screen.state = new this.screen.states.ScreenOn(this.screen);
        // Оповещаем текущую программу об активации
        this.screen.subject.notify(this, 'touch');
    }

    swipe() {
        // ничего не происходит
    }
}

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

const mobile = new MobileScreen();
mobile.subject.addObserver((entity, event)=>{
    console.log(event);
});

mobile.powerOn();

mobile.touch();
mobile.swipe();

