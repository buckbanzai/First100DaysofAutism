window.First100Days = window.First100Days || {};
window.First100Days.Utils = window.First100Days.Utils || {};

window.First100Days.Utils.extend = function(object, properties) {
    if (object && properties) {
        for(key in properties) {
            object[key] = properties[key];
        }
    }
    return object;
};
