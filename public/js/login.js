const chessLoginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-chess-login').value.trim();
  const password = document.querySelector('#password-chess-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/'); // When successful, load the homepage
    } else {
      alert('Failed to log in.'); // When unsuccessful, show alert
    }
  }
};

// Event listener
const chessLoginForm = document.querySelector('.chess-login-form');
if (chessLoginForm) {
  chessLoginForm.addEventListener('submit', chessLoginFormHandler);
}
