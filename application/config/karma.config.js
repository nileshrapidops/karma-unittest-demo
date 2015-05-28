module.exports = function(config){
    config.set({
    // root path from where we defines our all file paths
    basePath : '../',

    /* files needs to be tested
     * order matters
     * list libraries before application files
     */
    files : [
        // third party specific files
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-mocks/angular-mocks.js',
        // application and test specific files
        'app.module.js',
        'app.js',
        'data/mock_data.js',
        'data/spec_helper.js',
        'app.spec.js',
        'services/*.js',
        'controllers/*.js'
    ],

    // exclude the files that we don't want to test
    exclude : [
    ],

    // preprocess matching files before serving them to the browser
    preprocessors : {
        // 'app.js': 'coverage',
        'controllers/!(*spec).js': 'coverage'
    },

    reporters : ['spec', 'coverage'],

    coverageReporter : {
        type : 'html',
        dir : 'coverage/'
    },
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch : true,
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun : true,

    frameworks: ['mocha', 'chai', 'sinon'],

    browsers : ['PhantomJS'],

    plugins : [
        // 'karma-chrome-launcher',
        'karma-phantomjs-launcher',
        'karma-mocha-reporter',
        'karma-spec-reporter',
        // 'karma-firefox-launcher',
        // 'karma-jasmine',
        'karma-coverage',
        'karma-mocha',
        'karma-chai',
        'karma-sinon'
    ]

})}
