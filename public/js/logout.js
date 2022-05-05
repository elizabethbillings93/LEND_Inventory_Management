const logout = async () => {
    console.log('red')
    const response = await fetch('/api/emp/logout', {
        method: 'Post',
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

const logoutBtn = document.getElementById("logout")

logoutBtn.addEventListener("click", logout)