<cfoutput>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#event.buildLink('')#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="contacts">Contacts</li>
        </ol>
    </nav>
    
    <div class="container-fluid mt-4">
        <h1 class="h1">Contacts Manager</h1>
        <b-alert :show="loading" variant="info">Loading...</b-alert>
        <b-row>
          <b-col>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="contact in contacts" :key="contact.name">
                  <td>{{ contact.contactid }}</td>
                  <td>{{ contact.name }}</td>
                  <td>{{ contact.email }}</td>
                  <td class="text-right">
                    <a href="" @click.prevent="populatecontactToEdit(contact)">Edit</a> -
                    <a href="" @click.prevent="deletecontact(contact.contactid)">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-col>
          <b-col lg="3">
            <b-card :name="(model.contactid ? 'Edit contact ID' + model.name : 'New contact')">
              <form @submit.prevent="savecontact">
                <b-form-group label="name">
                  <b-form-input type="text" v-model="model.name"></b-form-input>
                </b-form-group>
                <b-form-group label="email">
                  <b-form-input rows="4" v-model="model.email"></b-form-input>
                </b-form-group>
                <div>
                  <b-btn type="submit" variant="success">Save contact</b-btn>
                </div>
              </form>
            </b-card>
          </b-col>
        </b-row>
      </div>
</cfoutput>