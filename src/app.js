var Greeting = /** @class */ (function () {
    function Greeting(name) {
        console.log("in constructor");
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting("xxxxxxx");
obj.greet();
