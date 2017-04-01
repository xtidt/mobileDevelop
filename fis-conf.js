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

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites', {
        scale: 0.5
    })
});

// fis要求要么不设置deploy，要么所有文件都设置deploy
fis.match('**', {
    release: 'basic-game/$0'
});


fis.match('**/_*.scss', {
    release: false
});

// mock数据需要在根路径下
// mock proxy注意不要匹配query，因为fis3-server-node会默认添加query
fis.match('mock/**', {
    release: '$0'
});

fis.match('js/**.es6', {
    parser: fis.plugin('es6-babel', {
        sourceMaps: true
    }),
    rExt: 'js'
});