const addResumeButton = document.getElementById("resume-form-submit");

addResumeButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    input_json = {}
    input_json['username'] = document.getElementById('inputName').value
    input_json['email'] = document.getElementById('inputEmail').value
    input_json['phone'] = document.getElementById('inputPhone').value
    input_json['job'] = document.getElementById('inputJobTitle').value
    input_json['keywords'] = document.getElementById('inputKeywords').value
    input_json['industry'] = document.getElementById('inputIndustry').value
    // input_json['country'] = document.getElementById('countryId').value
    input_json['state'] = document.getElementById('stateId').value
    input_json['city'] = document.getElementById('inputCity').value
    input_json['remarks'] = document.getElementById('inputRemark').value

    const visa_divs = ['flexRadioDefault1', 'flexRadioDefault2', 'flexRadioDefault3', 'flexRadioDefault4']
    var arrayLength = visa_divs.length;
    for (var i = 0; i < arrayLength; i++) {
        if (document.getElementById(visa_divs[i]).checked) {
            input_json['visa'] = document.getElementById(visa_divs[i]).value
            break
        }
    }

    if (document.getElementById('certificationOption1').checked) {
        input_json['certification'] = 'Yes'
    } else {
        input_json['certification'] = 'No'
    }

    input_json['file_path'] = document.getElementById('inputFile').value

    $.ajax({
        url: 'http://127.0.0.1:5000/add_resume',
        method: 'POST',
        // headers: {
        contentType: 'application/json',
        // },
        data: JSON.stringify(input_json),
        success: (add_resume_resp) => {
          console.log('ADD Resume Success')
          console.log(add_resume_resp)
          if (add_resume_resp['status'] == 200) {
            alert('Added Resume')
            window.location.href = "http://127.0.0.1:4200/dashboard.html";
          } else {
            alert('Add Resume Failed')
            window.location.href = "http://127.0.0.1:4200/add-resume.html";
          }
        },
        error: (e) => {
          console.log('Login Error')
          console.log(e)
          alert('Add Resume Failed')
          window.location.href = "http://127.0.0.1:4200/add-resume.html";
        }
    });
})

