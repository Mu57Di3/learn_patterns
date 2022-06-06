/**
 * @file
 * Создан Bender 02.06.2022
 */
const Subject = require("../../observer/SubjectF");
const {MobileStates} = require("./states");

class MobileScreen {
    constructor() {
        // Список состояний нужен для переключений между ними
        // Иначе возможно появление циклических зависимостей внутри состояний
        this.states = MobileStates;

        // Начальное состояние
        // Внутрь передается текущий объект
        // Это нужно для смены состояний (примеры ниже)
        this.state = new this.states.PowerOffState(this);
        this.subject = new Subject();
    }

    powerOn() {
        // Предыдущее состояние нас не волнует
        // Все данные хранятся в самом экране
        // Объекты-состояния не имеют своих данных
        this.state = new this.states.ScreenDisabledState(this);
        this.subject.notify(this, 'on');
    }

    touch() {
        this.state.touch();
    }

    swipe() {
        this.state.swipe();
    }
}

const mobile = new MobileScreen();
mobile.subject.addObserver((entity, event)=>{
    console.log(event);
});

mobile.powerOn();

mobile.touch();
mobile.swipe();
