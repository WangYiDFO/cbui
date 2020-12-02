<cfoutput>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#event.buildLink('')#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Working Steps</li>
        </ol>
      </nav>

      <div class="jumbotron">
        <h1 class="display-4">How make ColdBox run under DFO ENV Setup</h1>
            <p class="lead">This page provide Steps to developer as a Show Case.</p>
          <hr class="my-4">      
          <p>
            Please follow this links on all steps:
          </p>
          <blockquote class="blockquote">
         <p>Step ZERO - PRE
         </br>
          Install CommandBox: following instruction from here
        </br>
          https://www.ortussolutions.com/products/commandbox
        </br>

          CommandBox is ColdFusion module managment tool. Similar to NPM to Node.js
        </br>
          This will give you Box command and coldfusion engine locally 
        </br>
      </br>

          BOX Command runs VERY SLOW, be patiant 
        </br>
      </br>

          Install Node.js and NPM if not yet installed
        </br>
          https://www.npmjs.com/get-npm
        </br>
      </br>

          This will give you node and npm command

         </p>
        </blockquote>
        <blockquote class="blockquote">
         <p>Step One - Create Coldbox from template 
          <p>
          In this example, we user this template: https://github.com/coldbox-templates/elixir-vuejs
          <p>
          Within CommandBox (run [box] command ------ again, very slow)
          <p>
          cd to your app folder
          <p>
          install coldbox       ----- so taht install coldbox folder with coldbox command
          <p>
          coldbox create app skeleton=cbtemplate-elixir-vuejs  ------ create coldbox app based on template
          <p>
          This Template comes with Bootstrap UI framework and VueJS
          <p>* [Bootstrap](https://getbootstrap.com)
            <p>* [VueJS](https://vuejs.org/)

        </blockquote>
          <blockquote class="blockquote">
         </p>Step Two - Add Theme
         <p>
          <p>Theme under /resources folder, will be compiled by webpack
            <p>I use sass file, define your own CSS variable.
              <p>You can also use plain CSS file. Team need to come to agreement what to use.

         <p>

         </p>
        </blockquote>
         <blockquote class="blockquote">
         <p>Step Three - Authenticatioin
          <p> CBSecurity modules from ColdBox is being used
            <p> https://coldbox-security.ortusbooks.com/
              <p>
                <p>little bit compliated to describe in short words, please reference doc

         </p>
        </blockquote>
         <blockquote class="blockquote">
         <p>Step Four - CBORM (orm and scaffolding)
          <p>https://coldbox.ortusbooks.com/the-basics/models/coding-orm-scaffolding

            <p> setup is little tricky, after settup, in Box terminal:

              <p> coldbox create orm-entity entityName=password primaryKey=passwordID properties=password,env,appname,url
                <p>coldbox create orm-crud entity=models.password pluralName=passwords
          
                  <p>Tow commands, will scaffold simple CRUD with Model/View/Controller

         </p>   
        </blockquote>  
 
      </div>
</cfoutput>