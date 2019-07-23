import jwtDecode from 'jwt-decode';

const tokenKey = 'token';

export const getJwt = () => localStorage.getItem(tokenKey);
export const setJwt = token => localStorage.setItem(tokenKey, token);
export const logout = () => localStorage.removeItem(tokenKey);

export const getCurrentUser = () => {
  try {
    const token = getJwt();
    const user = jwtDecode(token);

    return user;
  } catch (error) {
    return null;
  }
};
