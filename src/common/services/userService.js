function logout() {
    localStorage.removeItem('user');
    window.location.reload(false);
}

export const userService = {
    logout
};
