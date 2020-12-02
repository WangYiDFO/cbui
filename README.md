# CBUI

<!-- ABOUT THE PROJECT -->
## About The Project

This project is POC of using ColdBox stack for DFO internal/external site project. 

This project:
* Utilize ColdBox HMVC framework as fundation
* Utilize ColdBox-Elixir template (Coldfusion+VueJS) from ColdBox
* Utilize Bootstrap/BootstrapVue (most common UI framework in the world)
* Utilize RESTFul Backend (other project)
* Utilize Vue+Axios for Javascript REST call
* Utilize Hyper for Coldfusion REST Call
* Utilize JWT for Authentication
* Utilize CBSecurity for Authorization
* Utilize CBORM (powered by Hibernate) for quick Scaffolding for DB access
* Backend (other project) uses Windows Domain Authentication
* Backend (other project) integrated with PACADMIN



A list of commonly used resources that I find helpful are listed here.

### Built With

* [CommandBox](https://www.ortussolutions.com/products/commandbox)
* [ColdBox](https://coldbox.org)
* [Bootstrap](https://getbootstrap.com)
* [VueJS](https://vuejs.org/)




<!-- GETTING STARTED -->
## Getting Started

This is an example of how setup DEV environment.

### Prerequisites

### BACKEND RESTFUL server need to be setup first: RESTFul services - CBREST Project.

FOR Development:

CommandBox and Node.js are requried.

* commandbox (similar to npm for JS, this is Coldfusion package management tool)
  ```sh
  https://www.ortussolutions.com/products/commandbox
  ```
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo, put in DFO App Folder
   ```sh
   git clone https://github.com/ios-patricia/cbui.git
   ```
2. Setup IIS Rewrite for new folder for user-friendly URL, Sample:
   ```xml
    <rule name="redirect cbui" stopProcessing="true">
                    <match url="^cbui/(.*)$" />
                    <conditions>
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="/cbui/index.cfm/{R:1}" />
                </rule>
   ```
3. Install ColdBox and its modules
   ```sh
   box install 
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Compile Javascript
   ```sh
   npm run dev
   ```
6. Setup NEW DB under Coldfusion Admin

7. Config .cfconfig.json file and .env file for DB access
   
   sample(partial) .cfconfig.json file. ColdBox uses this config file format

   ```json
   "datasources" : {
		 "${DB_DATABASE}":{
			 "host":"${DB_HOST}",
			 "dbdriver":"${DB_DRIVER}",
			 "database":"${DB_DATABASE}",
			 "dsn":"jdbc:derby:{dbfolder}",
			 "custom":"",
			 "port":"${DB_PORT}",
			 "class":"${DB_CLASS}",
			 "username":"${DB_USER}",
			 "password":"${DB_PASSWORD}",
			 "connectionLimit":"100",
			 "connectionTimeout":"1",
			 "dbfolder":"${DB_FOLDER}"
		 }
	}
   ```
   
   sample(partial) .env file. App config info

   ```json
   # Database Information
        DB_CONNECTIONSTRING=jdbc:derby:C:\wwwroot\cbui\DBFile
        DB_CLASS=org.apache.derby.jdbc.EmbeddedDriver
        DB_DRIVER=Generic
        DB_DATABASE=cbui-passwordsafe
        DB_USER=
        DB_PASSWORD=
        DB_FOLDER=C:\wwwroot\cbui\DBFile
   ```



<!-- USAGE EXAMPLES -->
## Usage

1. Landing page is for un-authenticated user
2. Authentication used JWT, REST Call from RESTFul backend
3. Password page is for authorized users, and use CBOrm scaffolding  (i.e. NOT calling RESTFul Backend)
4. Contacts page is for authorized users, and use Javascript REST call


<!-- File Structure -->
## File Structure
```bash
applicationfolder          // Your ColdBox Application Folder
├── coldbox/               // ColdBox sytem files, will be installed after we run box install
├── config/                // ColdBox config file. 
├── handlers/              // controllers in MVC concept, called handler in ColdBox
├── includes/              // JS/CSS/as well as some common coldfusion function if needed
├── interceptors/          // interceptors -- hooks
├── layouts/               // layouts file ONLY, views under other folder
├── models/                // models in MVC concept, includes both entity model and service model
├── modules/               // ColdBox modules, for ex, CBORM, CBSecuirty, Hyper. install after run box install
├── modules_app/           // HMVC folder for Subapps/Components. for ex: HR/Accouting/Billing 
├── node_modules/          // node modules for development only. after run npm install
├── resources/             // JS source folder, similar to _src folder
├── testbox/               // TDD engine
├── tests/                 // TDD logic if being used
├── views/                 // views in MVC concept
├── .babelrc               // babel config file for transpile JS
├── .cfconfig.json         // ColdBox running config format
├── .env                   // App running config .env file
├── Application.cfc        // ColdBox entry point, need some twicks for mapping and ORM
├── box.json               // CommandBox config file, similar to packege.json to NPM
├── favicon.ico
├── index.cfm              // redirect entry point
├── package-lock.json
├── package.json           // npm config file
├── README.md
├── robots.txt
├── server.json            // CommandBox server command config
└── webpack.config.js      // webpack config for compile JS
```

<!-- ROADMAP -->
## Roadmap

1. Run ColdBox Framework under DFO server settings
2. Install from ColdBox-Elixir template
3. Add Theme
4. Add Authenticatioin and Authorization
5. Scaffolding CRUD from ColdBox
6. REST Call from inside Coldfusion
7. REST Call from Javascript



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License.



<!-- CONTACT -->
## Contact

ios-patricia

Project Link: [https://github.com/ios-patricia/cbui](https://github.com/ios-patricia/cbui)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* DFO for providing opportunity to discover new framework