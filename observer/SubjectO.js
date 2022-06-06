/**
 * @file Субъект объекты
 * Создан Bender 26.05.2022
 */

class SubjectO {
    _observers = []

    addObserver(observer) {
        this._observers.push(observer);
    }

    removeObserver(observer) {
        this._observers = this._observers.filter((item)=>{
            return item !== observer;
        })
    }

    notify(entity, event){
        this._observers.forEach((observer)=>{
            observer.onNotify(entity, event)
        })
    }
}


module.exports = SubjectO;
