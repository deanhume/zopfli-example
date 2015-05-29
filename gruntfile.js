var path = require('path');

module.exports = function (grunt) {

			grunt.initConfig({
			  zopfli: {
			    compress: {
			      files: {
			        'processed.js.gz': 'original.js'
			      }
			    },
			    options: {
			    	path:  path.join(__dirname, '/zopfli_lib/zopfli.exe') // Optional full path to zopfli file
			    }
			  }
			});

    // Load the plugins
    grunt.loadNpmTasks('grunt-zopfli');

    // Default tasks.
    grunt.registerTask('default', ['zopfli']);
};
