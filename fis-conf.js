fis.match('**.scss', {
    rExt: '.css',
    parser: fis.plugin('node-sass'),
    optimizer: fis.plugin('clean-css'),
    useSprite: true
});

// 采用less
fis.match('**.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x'), // less路径均用绝对路径
    useSprite: true
});

fis.match('**/_*.scss', {
    release: false
});

fis.match('js/**.es6', {
    parser: fis.plugin('es6-babel', {
        sourceMaps: true
    }),
    rExt: 'js'
});