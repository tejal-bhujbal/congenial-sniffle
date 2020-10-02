function logout() {
    localStorage.removeItem('user');
}

export const userService = {
    logout
};
