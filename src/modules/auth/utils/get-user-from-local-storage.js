
export const getUserFromLocalStorage = () => {
  try {
    const auth = localStorage.getItem('user');
    const parseAuthData = JSON.parse(auth);
    return parseAuthData || null;
  } catch (error) {
    console.error(error);
  }
};