import Vue from 'vue';
import { authHeader } from '../_services';

window.Vue = require( 'vue' );

import Hola from '../components/Hola.vue';

new Vue({
    el  : '#app',
    components: { Hola},
    mounted : function() {
        if ( Vue.config.devtools && console.log ) {
            console.log( 'ColdBox, Vue and Vueify all set to go!' );
            console.log( "Vue Version " + Vue.version );
            console.log('Server sent token: ' + JSON.stringify(authHeader()));
        }
    }
  
})




