var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var GenericStorage = /** @class */ (function () {
    function GenericStorage() {
        this.array = [];
    }
    GenericStorage.prototype.add = function (item) {
        this.array.push(item);
    };
    GenericStorage.prototype.remove = function (item) {
        this.array = this.array.filter(function (elem) { return elem !== item; });
    };
    GenericStorage.prototype.getAll = function () {
        return __spreadArray([], this.array, true);
    };
    return GenericStorage;
}());
var storage = new GenericStorage();
storage.add(10);
storage.add(20);
storage.add(30);
console.log(storage.getAll());
storage.remove(20);
console.log(storage.getAll());
// Output:
// [ 10, 20, 30 ]
// [ 10, 30 ]
