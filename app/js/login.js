const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const in_username = document.getElementById('username-field').value
  const in_password = document.getElementById('password-field').value
  console.log('Trying to LogIn with details : ', in_username, in_password)

  $.ajax({
    url: 'http://127.0.0.1:5000/login',
    method: 'POST',
    // headers: {
    contentType: 'application/json',
    // },
    data: JSON.stringify({
      "username": in_username,
      "password": in_password,
    }),
    success: (login_resp) => {
      console.log('Login Success')
      console.log(login_resp)
      if (login_resp['status'] == 200) {
        window.location.href = "http://127.0.0.1:4200/dashboard.html";
      } else {
        window.location.href = "http://127.0.0.1:4200/index.html";
        alert('Invalid Credentials')
      }
    },
    error: (e) => {
      console.log('Login Error')
      console.log(e)
      window.location.href = "http://127.0.0.1:4200/index.html";
      alert('Login Error')
    }
  });
})

