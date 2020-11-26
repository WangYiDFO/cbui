component accessors="true" singleton {

	/**
	 * --------------------------------------------------------------------------
	 * DI
	 * --------------------------------------------------------------------------
	 */

	//property name="populator" inject="wirebox:populator";
	//property name="wirebox" inject="wirebox";
	property name="CBTestClient" inject="CBTestClient";
	property name="sessionStorage" inject="sessionStorage@cbstorages";
	property name="cookieStorage" inject="cookieStorage@cbstorages";


	/**
	 * Constructor
	*/
	function init() {
		return this;

	}

	
	/**
	 * Construct a new user object via WireBox
	 */
	User function new() provider="User"{}

	/**
	 * Verify if the incoming username/password are valid credentials.
	 *
	 * @username The username
	 * @password The password
	 */
	boolean function isValidCredentials( required username, required password ) {

		// call rest api
		var retVal = CBTestClient
		  .setUrl( "login")
		  .setBody( {
			username: arguments.username,
			password: arguments.password
		  })
		  .asJson()
		  .post()

		if (retVal.isSuccess() AND !retVal.json().error ){
			var data = retVal.json().data;
			var user = new();
			user.setId(data.user.id);
			user.setUserName(data.user.username);
			user.setFname(data.user.fname);
			user.setLname(data.user.lname);
			user.setPermissions(data.user.permissions);
			user.setToken(data.token);

			sessionStorage.set("currentUser", user);

			cookieStorage.set("bearer-token", data.token);

			return true
		}
		else{
			sessionStorage.delete("currentUser");
			cookieStorage.delete("bearer-token");
			return false;
		}
	}

	/**
	 * Retrieve a user by username
	 *
	 * @return User that implements JWTSubject and/or IAuthUser
	 */
	function retrieveUserByUsername( required username ) {

        var user = sessionStorage.get("currentUser", new())
		//var user = new();
		//user.setId("2323");
		//	user.setUserName("test");
		//	user.setFname("tesestst");
		//	user.setLname("setsets");
		//	user.setToken("stetsetss");

		return user;
	}

	/**
	 * Retrieve a user by unique identifier
	 *
	 * @id The unique identifier
	 *
	 * @return User that implements JWTSubject and/or IAuthUser
	 */
	User function retrieveUserById( required id ) {
		// our NT env, id = username
		return retrieveUserByUsername(arguments.id);
	}

	function deleteUserSession() {
		sessionStorage.delete("currentUser");
		cookieStorage.delete("bearer-token");
	}

}
