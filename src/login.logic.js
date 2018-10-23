const login = (username, password) => {
    return username === 'root' && password ==='root';
}

module.exports.login = login;