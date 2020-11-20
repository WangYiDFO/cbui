<cfoutput>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#event.buildLink('')#">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Sign In</li>
        </ol>
    </nav>
    <div class="container" id="login">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Sign In</h5>
                <form class="form-signin" v-on:click="doLogin">
                  <div class="form-label-group">
                    <input id="inputUsername" class="form-control" placeholder="Username" required autofocus>
                    <label for="inputUsername">User Name</label>
                  </div>
    
                  <div class="form-label-group">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                    <label for="inputPassword">Password</label>
                  </div>
    
                  <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                  <hr class="my-4">
                  <h6 class="text-center text-uppercase">TEST user admin/admin or user/user</h6>
                  <h6 class="text-center text-uppercase">Or your regular domain user</h6>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
</cfoutput>