const UserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs')

const register = async (name, email, password, age)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)
    const user = new UserModel({name, email, password: hash, age});
    await user.save()
    return user
}

const login = async (email, password) => {
    const user = await UserModel.findOne({email});
    if (user && bcrypt.compareSync(password, user.password)){
        return user;
    }
    return null
}

module.exports = { register, login }