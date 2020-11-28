/**
 * Manage passwords
 * It will be your responsibility to fine tune this template, add validations, try/catch blocks, logging, etc.
 */
component extends="coldbox.system.EventHandler" secured="user"{
	
	// DI Virtual Entity Service
	property name="ORMService" inject="entityService:password";
	
	// HTTP Method Security
	this.allowedMethods = {
		index  = "GET", 
		new    = "GET", 
		edit   = "GET", 
		delete = "POST,DELETE", 
		save   = "POST,PUT"
	};
	
	/**
	 * Param incoming format, defaults to `html`
	 */
	function preHandler( event, rc, prc ){
		event.paramValue( "format", "html" );
	}
		
	/**
	 * Listing
	 */
	function index( event, rc, prc ){
		// Get all passwords
		prc.passwords = ORMService.getAll();
		// Multi-format rendering
		event.renderData( data=prc.passwords, formats="xml,json,html,pdf" );
	}	
	
	/**
	 * New Form
	 */
	function new( event, rc, prc ){
		// get new password
		prc.password = ORMService.new();
		
		event.setView( "passwords/new" );
	}	

	/**
	 * Edit Form
	 */
	function edit( event, rc, prc ){
		// get persisted password
		prc.password = ORMService.get( rc.passwordID );
		
		event.setView( "passwords/edit" );
	}	
	
	/**
	 * View password mostly used for RESTful services only.
	 */
	function show( event, rc, prc ){
		// Default rendering.
		event.paramValue( "format", "json" );
		// Get requested entity by id
		prc.password = ORMService.get( rc.passwordID );
		// Multi-format rendering
		event.renderData( data=prc.password, formats="xml,json" );
	}

	/**
	 * Save and Update
	 */
	function save( event, rc, prc ){
		// get password to persist or update and populate it with incoming form
		prc.password = populateModel( 
			model                = ORMService.get( rc.passwordID ), 
			exclude              = "passwordID", 
			composeRelationships = true 
		);
		
		// Do your validations here
		
		// Save it
		ORMService.save( prc.password );
		
		// RESTful Handler
		switch(rc.format){
			// xml,json,jsont are by default.  Add your own or remove
			case "xml" : case "json" : case "jsont" :{
				event.renderData( data=prc.password, type=rc.format, location="/passwords/show/#prc.password.getpasswordID()#" );
				break;
			}
			// HTML
			default:{
				// Show a nice notice
				flash.put( "notice", { message="password Created", type="success" } );
				// Redirect to listing: change to `setNextEvent()` if using ColdBox <5
				relocate( 'passwords' );
			}
		}
	}	

	/**
	 * Delete
	 */
	function delete( event, rc, prc ){
		// Delete record by ID
		var removed = ORMService.delete( ORMService.get( rc.passwordID ) );
		
		// RESTful Handler
		switch( rc.format ){
			// xml,json,jsont are by default.  Add your own or remove
			case "xml" : case "json" : case "jsont" :{
				var restData = { "deleted" = removed };
				event.renderData( data=restData, type=rc.format );
				break;
			}
			// HTML
			default:{
				// Show a nice notice
				flash.put( "notice", { message="password Poofed!", type="success" } );
				// Redirect to listing: change to `setNextEvent()` if using ColdBox <5
				relocate( 'passwords' );
			}
		}
	}	
	
}

