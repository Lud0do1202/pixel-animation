export class Pixel {
    /**
     * @param x The row (0 -> ...)
     * @param y The column (0 -> ...)
     * @param color The color of the pixel (default = 'black')
     */
    constructor(public x: number, public y: number, public color: string = 'black') {}

    /**
     * @param pixels The array to look into
     * @returns false if not in array | The index of the pixel if found
     */
    inArray(pixels: Pixel[]): false | number {
        const length = pixels.length;
        for (let i = 0; i < length; i++) if (this.equals(pixels[i])) return i;
        return false;
    }

    /**
     * @param other The pixel to compare
     * @returns Check only the x and y NOT the color
     */
    equals(other: Pixel): boolean {
        return this.x === other.x && this.y === other.y;
    }
}
