Config = GLOBAL.config
Gulp = require 'gulp'
Error_Handle = require '../util/handleErrors'
Concat = require "gulp-concat"
Sourcemap = require "gulp-sourcemaps"
Uglify = require 'gulp-uglify'
Utilities = require 'gulp-util'
replace = require 'gulp-replace'
clean_css = require 'gulp-clean-css'
Download = require 'gulp-download'


get_source = ->
	scripts =
		lg_core      : "https://raw.githubusercontent.com/sachinchoolur/lightGallery/master/dist/js/lightgallery.js"
		lg_video     : "https://raw.githubusercontent.com/sachinchoolur/lg-video/master/dist/lg-video.js"
		lg_thumbs    : "https://raw.githubusercontent.com/sachinchoolur/lg-thumbnail/master/dist/lg-thumbnail.js"
		lg_share     : "https://raw.githubusercontent.com/sachinchoolur/lg-share/master/dist/lg-share.js"
		lg_fullscreen: "https://raw.githubusercontent.com/sachinchoolur/lg-fullscreen/master/dist/lg-fullscreen.js"
		lg_autoplay  : "https://raw.githubusercontent.com/sachinchoolur/lg-autoplay/master/dist/lg-autoplay.js"

	lib_order = Object.keys( scripts )

	libs = lib_order.map ( str ) -> "./sources/script/libs/light_gallery/#{str}.js"

	# Append the custom_lg_hash
	libs.push "./sources/script/libs/light_gallery/custom_lg_hash.js"

	Gulp.src( libs )


development = ->

	ugly_opts =
		mangle          : false
		preserveComments: 'all'
		compress        : false
		output          :
			beautify: true

	download_stylesheet( )

	get_source( )
		.pipe( Sourcemap.init( loadMaps: true ) )
		.pipe( Uglify( ugly_opts ).on( 'error', Error_Handle ) )
		.pipe( Concat( "light-gallery-custom.js" ) )
		.pipe( Gulp.dest( Config.libs.dest ) )


production = ->
	get_source( )
		.pipe( Uglify( ).on( 'error', Error_Handle ) )
		.pipe( Concat( "light-gallery-custom.js" ) )
		.pipe( Gulp.dest( Config.libs.dest ) )

	download_stylesheet( )

download_stylesheet = ->

	download = Download( 'https://raw.githubusercontent.com/sachinchoolur/lightGallery/master/dist/css/lightgallery.css' )

	if GLOBAL.production( )
		download.pipe( clean_css( ) )

	download.pipe( Gulp.dest( Config.libs.dest ) )

Gulp.task "light_gallery", ->
	console.log ""
	if GLOBAL.production( )
		console.log "Contcatenate lightGallery: ", Utilities.colors.yellow( 'Production' )
		production( )
	else
		console.log "Contcatenate lightGallery: ", Utilities.colors.green( 'Development' )
		development( )