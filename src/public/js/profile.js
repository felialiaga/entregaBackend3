const logOut = document.getElementById('logOutBtn');

logOut.addEventListener('click', e => {
    fetch('/api/sessions/logout')
})