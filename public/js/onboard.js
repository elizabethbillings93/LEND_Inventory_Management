const submitBtn = document.getElementById("submit")

const createEmployee =  async (event) => {
    const first_name = document.getElementById('firstnameinput').value;
    const last_name = document.getElementById('lastnameinput').value;
    const phone_number = document.getElementById('phonenumber').value;
    const email = document.getElementById('emailinput').value;
    const password = document.getElementById('passwordinput').value;
    if( first_name && last_name && phone_number && email && password ){
        const response = await fetch('/api/emp/onboard', {
            method: 'POST',
            body: JSON.stringify({  first_name, last_name, phone_number, email, password}),
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            alert(response.statusText);
          }
        } else {
          alert('Information invlad')
        }
}
submitBtn.addEventListener("click", createEmployee)