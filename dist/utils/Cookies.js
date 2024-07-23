"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cookie = '';
class Cookies {
    parser(req, res, next) {
        res = res;
        next = next;
        cookie = req.headers['cookie'].split(';');
        return next();
    }
    get(name) {
        const data = cookie.map((x) => {
            return x.split('=');
        });
        const splitting = data
            .map((x) => {
            return {
                [x[0].replace(' ', '')]: x[1]
            };
        });
        const hasil = splitting.filter((x) => x[name])[0];
        if (!hasil)
            throw console.error(new Error(`cookies ${name} not found !`));
        return hasil[name];
    }
}
exports.default = new Cookies;
