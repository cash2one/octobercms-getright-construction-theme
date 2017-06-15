var elixir = require('laravel-elixir');
require('laravel-elixir-livereload');

elixir(function (mix) {

    mix.livereload([
        './**/*.htm',
        './assets/less/**/*.less',
        './assets/js/**/*.js'
    ]);

});
