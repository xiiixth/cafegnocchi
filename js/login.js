function validateLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validPassword = 'password';

  if (username && password === validPassword) {
  window.location.href = `welcome.html?username=${username}`;
}
}
