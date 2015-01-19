module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			foo: {
				files: {
					'dest/<%= pkg.name %>.css': ['css/*.css']
				}
			},
			bar: {
				options: {
					banner: '/* <%= pkg.name %>.min.css <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'dest/<%= pkg.name %>.min.css': 'dest/<%= pkg.name %>.css'
				}
			}
		},
		concat: {
			foo: {
				files: {
					'dest/<%= pkg.name %>.js': ['js/*.js']
				}
			}
		},
		uglify: {
			foo: {
				options: {
					banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'dest/gruntTest.min.js': 'dest/gruntTest.js'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['cssmin', 'concat', 'uglify']);
}