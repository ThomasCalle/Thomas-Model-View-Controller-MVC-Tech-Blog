// Logout function to send request to log out the user
const chessLogout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/'); // When successful, load the homepage
  } else {
    alert('Failed to log out.'); // When unsuccessful, show alert
  }
};
// Add an event listener to the logout button
const chessLogoutButton = document.querySelector('#chess-logout');
if (chessLogoutButton) {
  chessLogoutButton.addEventListener('click', chessLogout);
}
