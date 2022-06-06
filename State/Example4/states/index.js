/**
 * @file
 * Создан Bender 02.06.2022
 */
const PowerOffState = require("./PowerOffState");
const ScreenDisabledState = require("./ScreenDisabledState");
const ScreenOnState = require("./ScreenOnState");

class MobileStates {
    static ScreenOnState = ScreenOnState
    static ScreenDisabledState = ScreenDisabledState
    static PowerOffState = PowerOffState
}

module.exports = {
    MobileStates
}
