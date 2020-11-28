/**
 * A cool password entity
 */
component persistent="true" table="password"{

	// Primary Key
	property name="passwordID" fieldtype="id" column="passwordID" generator="native" setter="false";

	// Properties
	property name="password" ormtype="string";
	property name="env" ormtype="string";
	property name="appname" ormtype="string";
	property name="url" ormtype="string";
	

	// Validation
	this.constraints = {
		// Example: age = { required=true, min="18", type="numeric" }
		password = {required=true},
        appname = {required=true},
		env = {required=true},
		url = {required=true}
	};

	// Mementifier
	this.memento = {
		// An array of the properties/relationships to include by default
		defaultIncludes = [ "*" ],
		// An array of properties/relationships to exclude by default
		defaultExcludes = [],
		// An array of properties/relationships to NEVER include
		neverInclude = [],
		// A struct of defaults for properties/relationships if they are null
		defaults = {},
		// A struct of mapping functions for properties/relationships that can transform them
		mappers = {}
	};

	/**
	 * Constructor
	 */
	function init(){
		
		return this;
	}
}

