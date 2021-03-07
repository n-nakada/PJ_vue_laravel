module.exports = {
    // アセットはLaravelの `public` - `app`配下に作成
    outputDir: '../public/app',
    // app配下にjs,css等が置かれるのでpublicPathを調整
    publicPath: '/app',

    // portfolio
    pages: {
        // portfolioのエントリポイント、テンプレート、出力先
        portfolio: {
            entry: 'src/portfolio/main.js',
            template: 'templates/base.html',
            filename: '../../resources/views/spa/portfolio.blade.php',
        },
    },
};
