import { ReqType, ResType } from '../types/Cookies.type';
let cookie: any = ''
class Cookies {
    parser(
        req: ReqType,
        res: ResType,
        next: any,
    ) {
        res = res
        next = next
        cookie = req.headers['cookie'].split(';')
        return next()
    }
    get(name: string) {
        const data = cookie.map((x: string) => {
            return x.split('=')
        })
        const splitting = data
            .map((x: string) => {
                return {
                    [x[0].replace(' ', '')]: x[1]
                }
            })
        const raw = splitting.filter((x: {
            [x: string]: any;
        }) => x[name])[0]
        if (!raw) throw console.error(new Error(`cookies ${name} not found !`))
        return raw[name]
    }
}


export default new Cookies