import chroma from 'chroma-js';

export const getTaskColor = (colorNumber) => {
    const colors = {
        1: '#456BFF',
        2: '#ff8a00',
        3: '#FF4745',
        4: '#A145FF',
        5: '#3EC94B',
        6: '#463EC9',
        7: '#DC2FD9'
    }
    return colors[colorNumber];
};

export const getBlack = (intensity) => {
    return chroma('black').alpha(intensity);
};

export const getPallete = (colorName) => {
    const colors = {
        'main-background': getBlack(.8),
        'counter-background': getBlack(.3),
        'green': '#3EC94B'
    };

    const tomatoTheme = {
        'main-background': '#F2523A',
        'counter-background': '#DA523E'
    };

    return colors[colorName];
}