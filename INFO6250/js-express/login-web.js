//jshint esversion:6
const loginWeb={
  loginPage: function(){
    return `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <link rel="stylesheet" href="/login-web.css" type="text/css">
        <title>Register</title>
      </head>
      <body>
        <div>
        ${loginWeb.getUserLogin()}
          </div>
      </body>
    </html>
    `;
  },

  getUserLogin: function(){
    return `<form action="/login" method="POST">
      <h2>Register</h2>
    		<p>
    			<label for="userName" class="floatLabel">Username</label>
    			<input id="userName" name="userName" type="text">
    		</p>
    		<p>
    			<input type="submit" value="Login" id="submit">
    		</p>
    	</form>`;
  }
};

module.exports=loginWeb;
