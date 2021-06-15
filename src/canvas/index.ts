import { RENDER_CANVAS_NAME } from './../config/constants'

export class Canvas {
    
    private static isInitialized: boolean 
    private static _canvas: HTMLCanvasElement

    static get canvasElement(): HTMLCanvasElement {
        return this._canvas
    }

    public static _initialize(): void {
        if (this.isInitialized) return 

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById(RENDER_CANVAS_NAME)
        if (!canvas) {
            canvas = document.createElement('canvas')
            canvas.id = RENDER_CANVAS_NAME
            document.body.append(canvas)
        }
        this._canvas = canvas
        // Check to see if the canvas element is already present
        this.isInitialized = true
    }
}
Canvas._initialize()