// login.js main script -> main.js


// (c) Copyright 2021 Totoro700


// Call this when you want the user to login
function login(){ // Login
	var username=localStorage.getItem('username'); // Get username, if no username, then value is null
	var UserPassword=localStorage.getItem('password'); // Get password, if no password, then value is null
	if (username==null && UserPassword==null){ // Check if login data is null
		var name=prompt('Please enter your name', ''); // Get name
		if (name==null || name==''){ // Name is null
			var name='[Unknown]';
		}
		localStorage.setItem('name', name); // Update name
		var username=prompt('Please choose a username you can remember', ''); // Get username
		if (username==null || username==''){ // Username is null
			var username=''; // Set username to nothing
		}
		localStorage.setItem('username', username); // Set username
		var pass = prompt('Please choose a password you can remember', ''); // Get password
		if (pass==null || pass==''){ // CHeck if password is null
			var pass=''; // Set password to nothing
		}
		localStorage.setItem('password', pass); // Update password to localUsername
		alert('This page uses some local storage, if you want to clear or reset it, scroll down to the end of the page and click "Clear Data"'); // Quick Storage terms
	}else{ // User login before
		var usernameQ=prompt('Please enter your username', ''); // Enter password
		var passwordQ=prompt('Please enter your password', ''); // Enter username
		if (usernameQ==username && passwordQ==UserPassword){ // Check if username and password is correct
			var name=localStorage.getItem('name'); // Get name of user
			alert('Welcome back '+name+'!'); // Welcome
		}else{ // Incorrect
			alert('The used login info was not valid!');
			var resetInfo=confirm('Do you want to reset your login info?');
			if (resetInfo){ // Reset info
				localStorage.clear();
				alert('Please choose another username and password you will remember');
				login(); // Re-login
			}else{
				login(); // Login again
			}
		}
	}
}

// Or use this to login once the user loads the site (window.onload):
/*

window.onload = function(){
	login();
}

*/
