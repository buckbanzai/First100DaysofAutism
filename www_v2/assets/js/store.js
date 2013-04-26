(function() {
    var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
    window.First100Days = window.First100Days || {};
    window.First100Days.Store = (function() {
        Store.prototype.expires = 365;

        Store.prototype.path = '/';

        Store.prototype.domain = window.location.hostname;

        function Store(name, options) {
            this.name = name;
            this.has = __bind(this.has, this);
            this.remove = __bind(this.remove, this);
            this.add = __bind(this.add, this);
            this.cookieGet = __bind(this.cookieGet, this);
            this.cookieSet = __bind(this.cookieSet, this);
            this.localStorageGet = __bind(this.localStorageGet, this);
            this.localStorageSet = __bind(this.localStorageSet, this);
            if (options) {
                if (options.expires) {
                    this.expires = options.expires;
                }
                if (options.path) {
                    this.path = options.path;
                }
                if (options.domain) {
                    this.domain = options.domain;
                }
            }
            if (window.localStorage != null) {
                this.set = this.localStorageSet;
                this.get = this.localStorageGet;
            } else {
                this.set = this.cookieSet;
                this.get = this.cookieGet;
            }
        }

        Store.prototype.localStorageSet = function(value) {
            return localStorage.setItem(this.name, JSON.stringify({
                value: value,
                timestamp: new Date().getTime()
            }));
        };

        Store.prototype.localStorageGet = function() {
            var object;

            object = JSON.parse(localStorage.getItem(this.name));
            if ((object != null) && object.timestamp > new Date().getTime() - (this.expires * 86400000)) {
                return object.value;
            } else {
                return null;
            }
        };

        Store.prototype.cookieSet = function(value) {
            return $.cookie(this.name, JSON.stringify(value), {
                expires: this.expires,
                path: this.path,
                domain: this.domain
            });
        };

        Store.prototype.cookieGet = function() {
            try {
                return JSON.parse($.cookie(this.name));
            } catch (_error) {}
        };

        Store.prototype.add = function(value) {
            var new_value, old_value;

            old_value = this.get() || [];
            new_value = _.union(old_value, value);
            this.set(new_value);
            return new_value;
        };

        Store.prototype.remove = function(value) {
            var new_value, old_value;

            old_value = this.get() || [];
            new_value = _.difference(old_value, value);
            this.set(new_value);
            return new_value;
        };

        Store.prototype.has = function(value) {
            var val;

            val = this.get() || [];
            if (_(val).isArray()) {
                return _(val).include(value);
            } else {
                return val === value;
            }
        };

        return Store;

    })();

}).call(this);
