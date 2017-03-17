var gulp = require('gulp');
var inject = require('gulp-inject');

module.exports = function googleTagManager(config) {
    return inject(gulp.src(config.templatePath), {
        starttag: '<!-- inject:google-tag-manager -->',
        transform: function (filePath, file) {
            return file.contents.toString('utf8')
                .replace(/^[\n\r\s]+/, '')
                .replace(/\{\{gtmId\}\}/g, config.gtmId);
        }
    });
};
