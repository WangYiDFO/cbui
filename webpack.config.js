const elixir 	  = require( "coldbox-elixir" );
const webpack 	= require( "webpack" );
const path      = require('path');
const glob      = require('glob');
const fs        = require('fs');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
              }),
        //new BundleAnalyzerPlugin()
    ],
    devtool: '', // Removed dev-tools mapping
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
function getViewEventFiles () {
    let globPath = './views/*/*.cfm'
    
    let dirname, eventname, viewname, listViewEvent=[]
    let files = glob.sync(globPath)

    files.forEach(filename =>{
        // filename ./view/viewname/eventname.cfm
        // dirname = ./view/viewname/
        // viewname = viewname
        // eventname = eventname
        dirname = path.dirname(filename)
        viewname = dirname.slice(dirname.lastIndexOf('/') + 1)
        eventname = filename.slice(filename.lastIndexOf('/') + 1)
        eventname = eventname.slice(0, eventname.lastIndexOf('.'))
        listViewEvent.push(viewname+'/'+eventname)
    })

    return listViewEvent

  }

  function addEntry () {
    let entryObj = {}
    getViewEventFiles().forEach(item => {
      if (fs.existsSync('./resources/assets/js/' + item + '.js')) {
        entryObj['includes/js/' + item ] = './resources/assets/js/' + item + '.js'
      }
    })
    return entryObj
  }
  