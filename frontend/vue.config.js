module.exports = {
    // アセットはLaravelの `public` - `app`配下に作成
    outputDir: '../public/app',
    // app配下にjs,css等が置かれるのでpublicPathを調整
    publicPath: '/app',

    // tutorial
    pages: {
        // tutorialのエントリポイント、テンプレート、出力先
        tutorial: {
            entry: 'src/tutorial/main.js',
            template: 'templates/base.html',
            filename: '../../resources/views/spa/tutorial.blade.php',
        },
    },
    transpileDependencies: ['vuetify'],
};
