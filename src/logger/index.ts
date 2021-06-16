export class Logger {
    private _name: string

    constructor(name: string = 'Quartz') {
        this._name = name
    }

    info(message: string) {
        console.log(`${this._name}: INFO -> ${message}`)
    }

    warn(message: string) {
        console.warn(`${this._name}: WARN -> ${message}`)
    }

    error(message: string) {
        console.error(`${this._name}: ERROR -> ${message}`)
    }
}
