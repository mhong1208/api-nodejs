// kết nối collection categories
const mongoose = require ('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const categoriesSchema = new Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
})

module.exports = mongoose.models.category || mongoose.model('category', categoriesSchema)
// model kiểm tra category có tồn tại chưa rồi thêm vào

