export class Logger {

    private _name: string 

    constructor(name: string = 'Quartz') {
        this._name = name 
    }

    info(message: string) {
        console.log(`${this._name}`)
    }
}