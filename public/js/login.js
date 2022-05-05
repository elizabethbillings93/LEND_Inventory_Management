const login = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const email = $('#email-login').val();
    const password = $('#password-login').val();
  
   

    if (email && password) {
    //   Send a POST request to the API endpoint
      const response = await fetch('/api/emp/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

  
      if (response.ok) {
        // If successful, redirect the browser to products page
        document.location.replace('/products');
      // } else {
      //   alert(response.statusText);
      }
    } else {
        alert("Information invalid, Please try again");
    };
};
  

const loginForm = $('.loginform')

loginForm.submit(login)
