const addUserButton = document.getElementById("user-submit");

addUserButton.addEventListener("click", (e) => {
    e.preventDefault();
    in_username = document.getElementById('user-username').value
    in_password = document.getElementById('user-password').value
    in_industry = document.getElementById('user-industry').value
    in_active = document.getElementById('user-active').value

    $.ajax({
        url: 'http://127.0.0.1:5000/register',
        method: 'POST',
        // headers: {
        contentType: 'application/json',
        // },
        data: JSON.stringify({
            "username": in_username,
            "password": in_password,
        }),
        success: (login_resp) => {
            console.log(login_resp)
            if (login_resp['status'] == 200) {
                console.log('Registration Success')
                alert('User Added')
            } else {
                console.log('Registration Failed')
                alert('User not Added')
            }
            window.location.href = "http://127.0.0.1:4200/users.html";
        },
        error: (e) => {
            console.log('Registration Error')
            console.log(e)
            alert('User not Added')
            window.location.href = "http://127.0.0.1:4200/users.html";
        }
    });
})

window.onload = function() {
    $.ajax({
        url: 'http://127.0.0.1:5000/list_users',
        method: 'GET',
        success: (users_resp) => {
            console.log('Users List')
            console.log(users_resp)
        },
        error: (e) => {
            console.log('Users List Error')
            console.log(e)
        }
    });
};


