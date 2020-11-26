import Vue from 'vue';

window.Vue = require( 'vue' );

new Vue({
    el  : '#app',
    data () {
        return {
            submitted: false
        }
    },
    methods: {
        handleSubmit (event) {
            this.submitted = true;
        }
    },
    mounted : function() {
        if ( Vue.config.devtools && console.log ) {
            console.log( 'ColdBox, Vue and Vueify all set to go!' );
            console.log( "Vue Version " + Vue.version );
        }
    }
  
})



