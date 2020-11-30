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



A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

* [ColdBox](https://coldbox.org)
* [Bootstrap](https://getbootstrap.com)
* [VueJS](https://vuejs.org/)




<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

#### BACKEND RESTFUL server need to be setup first - CBREST Project.

This is an example of how to list things you need to use the software and how to install them.
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
2. Setup IIS Rewrite for new folder for user-friendly URL
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
3. Install ColdBox
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
7. Config.cfconfig.json file and .env file for DB access
   
   sample(partial) .cfconfig.json file

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
   
   sample(partial) .env file

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