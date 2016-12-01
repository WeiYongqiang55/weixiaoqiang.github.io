/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 30
          },{
              width: 800,
              suffix: '_large_1x',
              quality: 30
          },{
            width: 750,
              suffix: '_medium_2x',
              quality: 30
          },{
              width: 350,
              suffix: '_medium_1x',
              quality: 30
          },{
            width:500,
              suffix: '_small_2x',
              quality: 30
          },{
              width:250,
              suffix: '_small_1x',
              quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images']
      }
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        }
      }
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
            expand: true,
            // flatten 去除文件结构
            flatten:true,
            cwd:'images_src',
            src: ['fixed/*.{gif,jpg,png}','*.{gif,jpg,pn}'],
            dest: 'images/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
