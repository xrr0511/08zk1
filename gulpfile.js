var gulp = require('gulp');
var server = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var url = require('url');
var minCss = require('gulp-clean-css');
var minJs = require('gulp-uglify');
var data = require('./mock/data.json')
    //起服务
gulp.server(function() {

})