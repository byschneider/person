var gulp = require('gulp');
var inject = require('gulp-inject');

module.exports = function adobeTagManager(config) {
    return inject(gulp.src(config.templatePath), {
        starttag: '<!-- inject:adobe-tag-manager -->',
        transform: function (filePath, file) {
            return file.contents.toString('utf8')
                .replace(/^[\n\r\s]+/, '')
                .replace(/\{\{apiKey\}\}/g, config.apiKey)
                .replace(/\{\{script\}\}/g, config.script);
        }
    });
};
