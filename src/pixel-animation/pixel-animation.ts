import { CellSettings } from './cell-settings';

export class PixelAnimation {
    private frames: string[][] = [];
    private iFrame: number = 0;
    private rows: number = 0;
    private cols: number = 0;
    private interval: number;
    private gridInit: boolean = false;

    constructor(private container: HTMLDivElement, private cellSettings: CellSettings) {}

    /**
     * @param frame The strings to make one frame --> '.' = empty cell
     */
    addFrame(frame: string[]): void {
        // Get max rows
        if (frame.length > this.rows) this.rows = frame.length;

        // Get max cols
        frame.forEach((row) => {
            if (row.length > this.cols) this.cols = row.length;
        });

        // Add the frame
        this.frames.push(frame);
    }

    initGrid() {
        // Style
        this.container.style.display = 'grid';
        this.container.style.gridTemplateRows = `repeat(${this.rows}, ${this.cellSettings.height}px)`;
        this.container.style.gridTemplateColumns = `repeat(${this.cols}, ${this.cellSettings.width}px)`;
        this.container.style.gap = `${this.cellSettings.gapRows}px ${this.cellSettings.gapColumns}px`;

        // Create the grid
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const cell = document.createElement('div');
                cell.setAttribute('row', i.toString());
                cell.setAttribute('col', j.toString());
                this.container.appendChild(cell);
            }
        }

        // Grid init
        this.gridInit = true;
    }

    start(timeout: number): void {
        // Init grid
        if (!this.gridInit) this.initGrid();

        // Select first frame
        this.iFrame = 0;

        // Start the animation
        this.interval = setInterval(() => {
            // Get the frame
            const frame = this.frames[this.iFrame];

            // Run the grid
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    // Get the cell
                    const cell: HTMLElement = this.container.querySelector(`[row="${i}"][col="${j}"]`);

                    // Set transparent or color
                    if (!frame[i][j] || frame[i][j] === '.') cell.style.backgroundColor = 'transparent';
                    else cell.style.backgroundColor = this.cellSettings.color;
                }
            }

            // Next frame
            this.iFrame = (this.iFrame + 1) % this.frames.length;
        }, timeout);
    }

    stop(): void {
        clearInterval(this.interval);
    }
}
