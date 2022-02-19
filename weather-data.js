"use strict";

function weather(cityName, description) {
    this.cityName = cityName;
    this.description = description;
    this._temperature = '';
}

Object.defineProperty(weather.prototype, 'temperature', {
    get: function() {
        return this._temperature;
    },
    set: function(value) {
        this._temperature = value.toFixed(1) +'°C';
    }
});