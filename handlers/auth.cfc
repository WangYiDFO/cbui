/**
 * I am a new handler
 */
component{
	property name="userService" inject="UserService";
	
	// OPTIONAL HANDLER PROPERTIES
	this.prehandler_only 	= "";
	this.prehandler_except 	= "";
	this.posthandler_only 	= "";
	this.posthandler_except = "";
	this.aroundHandler_only = "";
	this.aroundHandler_except = "";
	// REST Allowed HTTP Methods Ex: this.allowedMethods = {delete='POST,DELETE',index='GET'}
	this.allowedMethods = {};

	/**
	IMPLICIT FUNCTIONS: Uncomment to use

	function preHandler( event, rc, prc, action, eventArguments ){
	}
	function postHandler( event, rc, prc, action, eventArguments ){
	}
	function aroundHandler( event, rc, prc, targetAction, eventArguments ){
		// executed targeted action
		arguments.targetAction( event );
	}
	function onMissingAction( event, rc, prc, missingAction, eventArguments ){
	}
	function onError( event, rc, prc, faultAction, exception, eventArguments ){
	}
	function onInvalidHTTPMethod( event, rc, prc, faultAction, eventArguments ){
	}
	*/

	/**
	 * index
	 */
	function index( event, rc, prc ){
		event.setView( "auth/index" );
	}

	/**
	 * login
	 */
	function login( event, rc, prc ){
		try{
			var user = auth().authenticate(trim(rc.username),trim(rc.password));
		}
		catch (InvalidCredentials e){
			cbMessageBox().error( "Error",  [ "#e.message#"  ]);
			event.setView( "auth/index" );
			return;
		}
		catch(any e){
			cbMessageBox().error( "Error",  [ "#e.message#"  ]);
			event.setView( "auth/index" );
			return;
		}

		auth().login(user);
		
		cbMessageBox().success( "Success",  [ "Welcome: #user.getUsername()#"  ]);
		
		relocate("")		
	}

	/**
	 * logout
	 */
	function logout( event, rc, prc ){
		
		auth().logout();
		userService.deleteUserSession();
				
		cbMessageBox().success( "Success",  [ "Successfully logged out"  ]);
    	relocate("")
	}

	function onInvalidAuthorization( event, rc, prc){
		cbMessageBox().error( "Error",  [ "You are Not Authorized to access the recouces you just visit"  ]);
		event.setView( "auth/index" );
	}


}
