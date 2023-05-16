import { PixelAnimation } from './dist/lib/index.js';

const container = document.querySelector('#pixels');
const roundabout = new PixelAnimation(container, {
    width: 50,
    height: 50,
    gapRows: 10,
    gapColumns: 10,
    color: '#ff000080',
});
roundabout.addFrame(['X..X', '', '', 'X..X']);

roundabout.addFrame(['.X', '...X', 'X', '..X']);

roundabout.addFrame(['..X', 'X', '...X', '.X']);

roundabout.start(200);
