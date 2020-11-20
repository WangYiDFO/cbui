const elixir 	= require( "coldbox-elixir" );
const webpack 	= require( "webpack" );
const path      = require('path')
const glob      = require('glob')

elixir.config.mergeConfig({
    plugins: [
        // globally scoped items which need to be available in all templates
        new webpack.ProvidePlugin({
            $              : "jquery",
            jQuery         : "jquery",
            "window.jQuery": "jquery",
            "window.$"     : "jquery",
                  "Vue"          : ["vue/dist/vue.esm.js", "default"],
                  "window.Vue"   : ["vue/dist/vue.esm.js", "default"]
              })
    ],
    entry: addEntry(),
    output: {
      filename: '[name].js'
      }
  });
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your ColdBox application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

module.exports = elixir( function( mix ) {
	mix
		// Mix App styles
		.sass( "app.scss" )
		// Mix JS and VueJS components
		.vue( "app.js" );
} );


/*
  this function help to build entries for multi-page app
*/
function getViewEventJSFiles () {
    let globPath = './resources/assets/js/*/*.js'
    
    let dirname, jsname, viewname, listViewEvent=[]
    let files = glob.sync(globPath)

    files.forEach(filename =>{
        // filename ./resources/assets/js/viewname/eventname.js
        // dirname = ./resources/assets/js/viewname/
        // viewname = viewname
        // jsname = evename.js
        dirname = path.dirname(filename)
        viewname = dirname.slice(dirname.lastIndexOf('/') + 1)
        jsname = filename.slice(filename.lastIndexOf('/') + 1)
        listViewEvent.push(viewname+'/'+jsname)
    })

    return listViewEvent

  }

  function addEntry () {
    let entryObj = {}
    getViewEventJSFiles().forEach(item => {
        entryObj['includes/js/' + item.slice(0, item.lastIndexOf('.')) ] = './resources/assets/js/' + item
    })
    return entryObj
  }
  