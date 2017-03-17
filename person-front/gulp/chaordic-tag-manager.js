var gulp = require('gulp');
var inject = require('gulp-inject');

module.exports = function chaordicTagManager(config) {
    return inject(gulp.src(config.templatePath), {
        starttag: '<!-- inject:chaordic-tag-manager -->',
        transform: function (filePath, file) {
            if (!parseInt(config.inject, 10)) return;
            return file.contents.toString('utf8')
                .replace(/^[\n\r\s]+/, '')
                .replace(/\{\{dataApiKey\}\}/g, config.dataApiKey)
                .replace(/\{\{dataInitialize\}\}/g, config.dataInitialize.toString());
        }
    });
};
