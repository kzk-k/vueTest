const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    watchOptions: {
        ignored: /node_modules/
    }
});

mix.js("src/app.js", "dist/")
    .sass("src/sass/app.scss", "dist/")
    .options({
        postCss: [
            require("autoprefixer")({
                grid: true
            })
        ],
        processCssUrls: false
    })
    .setPublicPath("dist")
    .browserSync({
        files: ["*.html", "dist/*.*"],
        proxy: "http://127.0.0.1:8080/"
    });
/*
 * ファイル分割
 * distにmanifest, vendorファイルが生成される
 */
// .extract();
