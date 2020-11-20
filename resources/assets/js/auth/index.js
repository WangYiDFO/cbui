

new Vue( {
    el: '#login',
    data: {
      username: '',
      password: '',
      hidePassword: true
    },
    computed: {
      passwordType() {
        return this.hidePassword ? 'password' : 'text'
      },
      passwordIcon() {
        return this.hidePassword ? 'fa-eye' : 'fa-eye-slash'
      }
    },
    methods: {
      doLogin: function() {
        alert('Not implemented yet :O')
      }
    },
    mounted : function() {
        if ( Vue.config.devtools && console.log ) {
            console.log( 'Login.js mounted!' );
        }
    }
} );
