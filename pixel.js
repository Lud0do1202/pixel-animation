import { PixelAnimation } from './dist/lib/index.js';

const roundaboutContainer = document.querySelector('#roundabout');
const roundabout = new PixelAnimation(roundaboutContainer, {
    width: '50px',
    height: '50px',
    gapRows: '10px',
    gapColumns: '10px',
    color: '#ff000080',
});
roundabout.addFrame(['X..X', '', '', 'X..X']);
roundabout.addFrame(['.X', '...X', 'X', '..X']);
roundabout.addFrame(['..X', 'X', '...X', '.X']);
roundabout.start(200);

const jumpContainer = document.querySelector('#jump');
const jump = new PixelAnimation(jumpContainer, {
    width: '5%',
    height: '30px',
    gapRows: '2px',
    gapColumns: '2px',
    color: '#000',
});
jump.addFrame(['', '', '', '', '']);
jump.addFrame(['', '', 'X', '', '']);
jump.addFrame(['', '.X', 'X', '', '']);
jump.addFrame(['..X', '.X', 'X', '', '']);
jump.addFrame(['..X', '.X.X', 'X', '', '']);
jump.addFrame(['..X', '.X.X', 'X...X', '', '']);
jump.addFrame(['..X', '.X.X', '....X', '.....X', '']);
jump.addFrame(['..X', '...X', '....X', '.....X', '......X']);
jump.addFrame(['', '...X', '....X', '.....X.X', '......X']);
jump.addFrame(['', '', '....X...X', '.....X.X', '......X']);
jump.addFrame(['', '.........X', '........X', '.....X.X', '......X']);
jump.addFrame(['..........X', '.........X', '........X', '.......X', '......X']);
jump.addFrame(['..........X', '.........X.X', '........X', '.......X', '']);
jump.addFrame(['..........X', '.........X.X', '........X...X', '', '']);
jump.addFrame(['..........X', '.........X.X', '............X', '.............X', '']);
jump.addFrame(['..........X', '...........X', '............X', '.............X', '..............X']);
jump.addFrame(['', '...........X', '............X', '.............X.X', '..............X']);
jump.addFrame(['', '', '............X...X', '.............X.X', '..............X']);
jump.addFrame(['', '', '................X', '.............X.X', '..............X']);
jump.addFrame(['', '', '................X', '...............X', '..............X']);
jump.addFrame(['', '', '................X', '...............X', '']);
jump.addFrame(['', '', '................X', '', '']);
jump.addFrame(['', '', '', '', '']);
jump.start(200);
