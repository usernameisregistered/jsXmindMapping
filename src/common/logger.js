import moment from "moment";

export default class Logger {
    static info(message) {
        console.log(`%c ${moment().format('yyyy-MM-DD HH:mm:ss')} %c ${message}`, 'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background:#606060', 'color:green;')
    }
    static warn(message) {
        console.log(`%c ${moment().format('yyyy-MM-DD HH:mm:ss')} %c ${message}`, 'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background:#606060', 'color:#f7d72d;')
    }
    static error(message) {
        console.log(`%c ${moment().format('yyyy-MM-DD HH:mm:ss')} %c ${message}`, 'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background:#606060', 'color:red;')
    }
    static debug(message) {
        console.log(`%c ${moment().format('yyyy-MM-DD HH:mm:ss')} %c ${message}`, 'padding: 1px; border-radius: 0 3px 3px 0; color: #fff; background:#606060', "")
    }
}