const mix = require("laravel-mix");
require("laravel-mix-alias");

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
    ignored: /node_modules/,
  },
});

mix.alias({
  "@": "/resources/js",
  "~": "/resources/sass",
});

mix
  .js("src/app.js", "dist/")
  .sass("src/app.scss", "dist/")
  .options({
    postCss: [
      require("autoprefixer")({
        grid: true,
      }),
    ],
    processCssUrls: false,
  })
  .extract()
  .setPublicPath("dist")
  .browserSync({
    files: ["index.html", "dist/*.*"],
    proxy: "http://127.0.0.1:8080/",
  });
