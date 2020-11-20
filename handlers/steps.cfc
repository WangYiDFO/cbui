/**
 * I am a new handler
 */
component{

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
		event.setView( "steps/index" );
	}

	/**
	 * step1
	 */
	function step1( event, rc, prc ){
		event.setView( "steps/step1" );
	}


	/**
	 * step2
	 */
	function step2( event, rc, prc ){
		event.setView( "steps/step2" );
	}


	/**
	 * step3
	 */
	function step3( event, rc, prc ){
		event.setView( "steps/step3" );
	}


	/**
	 * step4
	 */
	function step4( event, rc, prc ){
		event.setView( "steps/step4" );
	}


	/**
	 * step5
	 */
	function step5( event, rc, prc ){
		event.setView( "steps/step5" );
	}




}
