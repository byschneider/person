'use strict';

// require common
var common = require('./common.js');

/**
 * Implements inject task
 */
common.gulp.task('inject', () => {
    var styles = common.gulp.src(common.dirs.temporary.root.path + '/**/*.{scss,css,sass}', { read: false });
    var scripts = common.gulp.src(common.dirs.temporary.root.path + '/**/*.js')
        .pipe(common.$.angularFilesort());

    var wiredepConfig = {
        directory: 'bower_components',
        ignorePath: '..'
    };

    var googleTagManagerConfig = {
        templatePath: 'templates/google-tag-manager.html',
        gtmId: process.env.NODE_ENV === 'production' ? 'GTM-KVR3T8' : 'GTM-PLV3GDX'
    };

    var chaordicTagManagerConfig = {
        inject: process.env.INJECT_CHAORDIC ? process.env.INJECT_CHAORDIC : 1,
        templatePath: 'templates/chaordic-tag-manager.html',
        dataApiKey: 'paodeacucar',
        dataInitialize: false
    };

    var adobeTagManagerConfig = {
        templatePath: 'templates/adobe-tag-manager.html',
        apiKey: '113b67e880d263a107febadce5e9526aaa2312b8',
        script: process.env.NODE_ENV === 'production'
                ? 'satelliteLib-4f822074f1a50590f25c0145601fb66cc5343596.js'
                : 'satelliteLib-4f822074f1a50590f25c0145601fb66cc5343596-staging.js'
    };

    return common.gulp.src('app/index.html')
        .pipe(common.$.inject(styles, { ignorePath: '.tmp' }))
        .pipe(common.$.inject(scripts, { ignorePath: '.tmp' }))
        .pipe(common.googleTagManager(googleTagManagerConfig))
        .pipe(common.chaordicTagManager(chaordicTagManagerConfig))
        .pipe(common.adobeTagManager(adobeTagManagerConfig))
        .pipe(common.wiredep(wiredepConfig))
        .pipe(common.gulp.dest('app'));
});
