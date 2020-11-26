<cfoutput>
  
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#event.buildLink('')#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Sign In</li>
        </ol>
    </nav>
    <cfif !auth().isLoggedIn()>
      <div class="container">
          <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div class="card card-signin my-5">
                <div class="card-body">
                  <h5 class="card-title text-center">Sign In</h5>
                  <form class="form-signin" @submit=handleSubmit action="#event.buildLink( 'auth.login' )#" method="post">
                    <div class="form-label-group">
                      <input name="username" id="username" class="form-control" placeholder="Username" required autofocus>
                      <label for="username">User Name</label>
                    </div>
      
                    <div class="form-label-group">
                      <input type="password" name="password" id="password" name="password" class="form-control"  placeholder="Password" required>
                      <label for="password">Password</label>
                    </div>
      
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" :disabled="submitted">Sign in</button>
                    <hr class="my-4">
                    <h6 class="text-center text-uppercase">TEST user admin/admin or user/user</h6>
                    <h6 class="text-center text-uppercase">Or your regular domain user</h6>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    <cfelse>
      <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">You Already Signed In</h5>
                <form class="form-signin" @submit=handleSubmit action="#event.buildLink( 'auth.logout' )#" method="post">
                  <div>
                    <label>Username: #auth().getUser().getUsername()#</label>
                  </div>  
                  <div>
                    <label>Roles: #auth().getUser().getPermissions().toList()#</label>
                  </div>
                     
                  <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" :disabled="submitted">Sign Out</button>
                  <hr class="my-4">
                  <h6 class="text-center text-uppercase">TEST user admin/admin or user/user</h6>
                  <h6 class="text-center text-uppercase">Or your regular domain user</h6>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </cfif>
</cfoutput>