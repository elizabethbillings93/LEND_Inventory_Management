const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'Post',
        hreaders: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

const logoutBtn = $("#logout")

logoutBtn.click(logout)