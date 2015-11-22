'use strict';

module.exports = {
    'browserPort'  : 3000,
    'UIPort'       : 3001,
    'serverPort'   : 3002,

    'src': '/app',

    'styles': {
        'src' : 'app/styles/main.scss',
        'dest': 'build/css',
        'tmp': '.tmp/styles',
        'prodSourcemap': false,
        'sassIncludePaths': []
    },

    'scripts': {
        'src' : 'app/js/**/*.js',
        'dest': 'build/js'
    },

    'images': {
        'src' : 'app/images/**/*',
        'dest': 'build/images'
    },

    'fonts': {
        'src' : ['app/fonts/**/*'],
        'dest': 'build/fonts'
    },

    'views': {
        'watch': [
            'app/index.html',
            'app/views/**/*.html'
        ],
        'src': 'app/views/**/*.html',
        'dest': 'app/js'
    },

    'gzip': {
        'src': 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
        'dest': 'build/',
        'options': {}
    },

    'dist': {
        'root'  : 'app'
    },

    'browserify': {
        'entries'   : ['./app/**/.js'],
        'bundleName': 'main.js',
        'prodSourcemap' : false
    },

    'test': {
        'karma': 'test/karma.conf.js',
        'protractor': 'test/protractor.conf.js'
    }
};
