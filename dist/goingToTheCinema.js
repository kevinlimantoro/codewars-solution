"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.movie = function (card, ticket, perc) {
        // your code
        var res = 0;
        var systemB = card;
        var discounted = ticket;
        do {
            res++;
            discounted = discounted * perc;
            systemB += discounted;
        } while (Math.ceil(systemB) >= (ticket * res));
        return res;
    };
    ;
    return G964;
}());
exports.G964 = G964;
console.log(G964.movie(500, 15, 0.9));
