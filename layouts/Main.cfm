<cfoutput>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Welcome to Coldbox UI POC Site With VueJS!</title>

	<meta name="description" content="ColdBox Application Template">
	<meta name="author" content="Ortus Solutions, Corp">
	
	<!---Base URL --->
	<base href="#event.getHTMLBaseURL()#" />

	<!---css --->
	<link rel="stylesheet" type="text/css" href="includes/css/app.css" />

	<!--- If there are any extracted Vue styles, they will be in this file --->
	<cfscript>
        if ( getCache( "template" ).getOrSet( "vue-styles-#event.getCurrentView()#", function() {
            return fileExists( expandPath( "includes/js/#event.getCurrentView()#.css" ) );
        } ) ) {
            writeOutput( '<link rel="stylesheet" type="text/css" href="includes/js/#event.getCurrentView()#.css" />' );
        }
	</cfscript>
	
	<!-- Custom fonts for this template -->
	<link href="includes/vendor/fontawesome-free/css/all.min.css" rel="stylesheet">
	<link href="includes/vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">

	<!--- for VueDevTool debug Vue --->
	<script src="http://localhost:8098"></script>

</head>
<body data-spy="scroll">
	<!---Top NavBar --->
	<nav class="navbar navbar-expand-lg navbar-light bg-light static-top" role="navigation">
		<div class="container">
			<a class="navbar-brand" href="#event.buildLink('')#">
				<strong><i class="fa fa-home"></i> Password Safe</strong>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="##navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
		
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item text-dark active">
					<a class="nav-link" href="#event.buildLink('')#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
					<a class="nav-link text-dark" href="">Password</a>
					</li>
					<li class="nav-item dropdown">
					<a class="nav-link text-dark dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Working Steps
					</a>
					<div class="dropdown-menu" aria-labelledby="navbarDropdown">
						<a class="dropdown-item" href="#event.buildLink('steps.index')###step1">1-Init</a>
						<a class="dropdown-item" href="">2-Add Theme</a>
						<div class="dropdown-divider"></div>
						<a class="dropdown-item" href="">3-Login Page</a>
					</div>
					</li>
				</ul>
				<a href="#event.buildLink('auth')#" class="btn btn-outline-primary" role="button" aria-pressed="true" aria-expanded="false">
					<i class="fa fa-star"></i>  Sign In
				</a>
			</div>	
				
		</div>
	  </nav>
    <!---end navbar --->

	<!---Container And Views --->
	<div class="container" id="app">
		#renderView()#
	</div>

	



	 <!-- Footer -->
	 <footer class="footer bg-light">
		<div class="container">
		  <div class="row">
			<div class="col-lg-6 h-100 text-center text-lg-left my-auto">
			  <ul class="list-inline mb-2">
				<li class="list-inline-item">
				  <a href="#event.buildLink('')#">About</a>
				</li>
				<li class="list-inline-item">&sdot;</li>
				<li class="list-inline-item">
				  <a href="#event.buildLink('')#">Contact</a>
				</li>
				<li class="list-inline-item">&sdot;</li>
				<li class="list-inline-item">
				  <a href="#event.buildLink('')#">Terms of Use</a>
				</li>
				<li class="list-inline-item">&sdot;</li>
				<li class="list-inline-item">
				  <a href="#event.buildLink('')#">Privacy Policy</a>
				</li>
			  </ul>
			  <p class="text-muted small mb-4 mb-lg-0">&copy; ColdBox POC site.</p>
			</div>
			<div class="col-lg-6 h-100 text-center text-lg-right my-auto">
			  <ul class="list-inline mb-0">
				<li class="list-inline-item mr-3">
				  <a href="#event.buildLink('')#">
					<i class="fab fa-facebook fa-2x fa-fw"></i>
				  </a>
				</li>
				<li class="list-inline-item mr-3">
				  <a href="#event.buildLink('')#">
					<i class="fab fa-twitter-square fa-2x fa-fw"></i>
				  </a>
				</li>
				<li class="list-inline-item">
				  <a href="#event.buildLink('')#">
					<i class="fab fa-instagram fa-2x fa-fw"></i>
				  </a>
				</li>
			  </ul>
			</div>
		  </div>
		</div>
	  </footer>

	<script src="includes/js/runtime.js"></script>
    <script src="includes/js/vendor.js"></script>
	<script src="includes/js/app.js"></script>

	<!--- inject current view javascript --->
	<!---cfdump  var="#event.getCurrentView()#"--->
	<cfscript>
		if ( getCache( "template" ).getOrSet( "view-event-js-#event.getCurrentView()#", function() {
            return fileExists( expandPath( "includes/js/#event.getCurrentView()#.js" ) );
        } ) ) {
			writeOutput( '<script src="includes/js/#event.getCurrentView()#.js"></script>' );
		}
  	</cfscript>

</body>
</html>
</cfoutput>
