#!/usr/bin/env node

var program = require('commander');
    pkg = require('../package.json'),
    placebase = require('placebase');

program
    .version(pkg.version)
    .option('-d, --directory <path>', 'Directory to output images into. Defaults to current directory', '.')
    .parse(process.argv);

var sizes = placebase.getSizes(process.argv);

var options = {
    directory: program.directory,
    urlBase: 'http://fillmurray.com/'
};

placebase.downloadAll(sizes, options);