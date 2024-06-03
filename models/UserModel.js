// kết nối collection categories
const mongoose = require ('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const userSchema = new Schema({
    name: {type: String, require: true},
    password: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: String, require: true},
    age: {type: String, require: true},
    role: {type: Boolean, require: true, default: false},
    token_reset: {type: String, require: false, default: null}
})

module.exports = mongoose.models.user || mongoose.model('users', userSchema)
// model kiểm tra category có tồn tại chưa rồi thêm vào
// models tập hợp các collection có trong model

