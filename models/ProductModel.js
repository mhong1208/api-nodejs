const mongoose = require ('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const productSchema = new Schema({
    name: {type: String, require: true},
    image: {type: String, require: true},
    price: {type: Number, require: true},
    description: {type: String, require: true},
    quantity: {type: Number, require: true},
    category: {
        type: {
            categoryId:{type: ObjectId, require: true},
            categoryName:{type: String, require: true}
        },
        require: true
    },
    view: {type: Number, require: true},
    hot: {type: Boolean, default: false}
})

module.exports = mongoose.models.product || mongoose.model('product', productSchema)
// model kiểm tra category có tồn tại chưa rồi thêm vào
// models tập hợp các collection có trong model

