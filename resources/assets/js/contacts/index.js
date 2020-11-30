import Vue from 'vue';
import { contactService } from '../_services';

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

window.Vue = require( 'vue' );

new Vue({
    el  : '#app',
    data () {
        return {
          loading: false,
          contacts: [],
          model: {}
        }
      },
      async created () {
        this.refreshcontacts()
      },
      methods: {
        async refreshcontacts () {
          this.loading = true
          this.contacts = await contactService.getcontacts()
          this.contacts = this.contacts.data
          this.loading = false
        },
        async populatecontactToEdit (contact) {
          this.model = Object.assign({}, contact)
        },
        async savecontact () {
          if (this.model.contactid) {
            await contactService.updatecontact(this.model.contactid, this.model)
          } else {
            await contactService.createcontact(this.model)
          }
          this.model = {} // reset form
          await this.refreshcontacts()
        },
        async deletecontact (id) {
          if (confirm('Are you sure you want to delete this contact?')) {
            // if we are editing a contact we deleted, remove it from the form
            if (this.model.contactid === id) {
              this.model = {}
            }
            await contactService.deletecontact(id)
            await this.refreshcontacts()
          }
        }
      },
      mounted() {
          if ( Vue.config.devtools && console.log ) {
            console.log( 'ColdBox, Vue and Vueify all set to go!' );
            console.log( "Vue Version " + Vue.version );
        }
      }
  
})
