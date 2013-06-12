/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: '<json:package.json>',

    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;\n' +
        '*/'
    },

    lint: {
      files: ['grunt.js']
    },

    watch: {
        scripts: {
            files: ['scripts/source/*.js'],
            options: {
                livereload: true
            }
        },
        html: {
            files:['index.html', 'stylesheets/*.css'],
            options: {
                livereload: true
            }
        }
    }
    
  });

  // Default task.
  grunt.registerTask('default', ['watch']);

  // dependencies
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
