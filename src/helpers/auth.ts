export function authHeader() {
  const userData = localStorage.getItem('user');
  const user = JSON.parse(userData ? userData : '');

  if (user && user.authdata) {
    return { Authorization: 'Basic ' + user.authdata };
  } else {
    return {};
  }
}
