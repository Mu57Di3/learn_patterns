/**
 * @file Пример
 * Создан Bender 26.05.2022
 */
const Observer = require("./Observer");
const SubjectO = require("./SubjectO");

const Events = {
    click: "MOUSE_CLICK",
    move: "MOUSE_MOVE",
    keyPressed: "KEY_PRESSED",
    keyUp: "KEY_UP",
}

class KeyboardOS extends Observer {
    onNotify(entity, event) {
        switch (event) {
            case Events.keyPressed:
                console.log("Кнопка нажата");
                break;
            case Events.keyUp:
                console.log("Кнопка отпущена");
        }
    }
}

class MouseOS extends Observer{
    onNotify(entity, event) {
        switch (event) {
            case Events.click:
                console.log("Клик мышки");
                break;
            case Events.move:
                console.log("Она жива");
        }
    }
}

class Gadgets {
    constructor() {
        this.subject = new SubjectO();
    }

    doMouseEvents() {
        this.subject.notify(this, Events.move);
        if (Math.round(Math.random()*100) % 2 === 0) {
            this.subject.notify(this, Events.click);
        }
    }
}


const gadgetsSubject = new Gadgets();
gadgetsSubject.subject.addObserver(new MouseOS());
gadgetsSubject.subject.addObserver(new KeyboardOS());

gadgetsSubject.doMouseEvents();
