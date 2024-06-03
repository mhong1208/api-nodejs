const UserService = require('../services/UserServices');

const register = async (name, email, password, age, confirm_pass) => {
    if(password !== confirm_pass){
        throw new Error('Mật khẩu không trùng khớp.!')
    }
    const user = await UserService.register(name, email, password, age);
    return user
}

const login = async (email, password) => {
    const user = await UserService.login(email, password);
    return user
}

module.exports = {register, login};