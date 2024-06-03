const productModel = require('../models/ProductModel');

exports.getAll = async () => {
    const products = await productModel.find();
    return products
};
exports.getProById = async (category) => {
    const products = await productModel.find({"category.categoryId": category});
    return products;
};


exports.getNewProducts = async () => {
    try {
        const result = await productModel.find().sort({ _id: -1 }).limit(4);
        return result;
    } catch (error) {
        throw new Error('Error while fetching hot products: ' + error.message);
    }
};

exports.getHotProducts = async () => {
    try {
        const result = await productModel.find({hot: true}).limit(4);
        return result;
    } catch (error) {
        throw new Error('Error while fetching hot products: ' + error.message);
    }
};


exports.create = async (name, price, quantity, category, image, description) => {
    const model = new productModel({name, price, quantity, category, image, description});
    await model.save();
    return model;
}

exports.update = async (id, name, price, quantity, category, image, description) => {
    const model = await productModel.findByIdAndUpdate(id, {name, price, quantity, category, image, description} );
    return model;
}

exports.findById = async (id) => {
    try {
        // Tìm danh mục theo ID
        const model = await productModel.findOne({ _id: id });
        return model;
    } catch (error) {
        throw error;
    }
}

exports.delete = async (id) => {
   await productModel.findByIdAndDelete(_id = id);
}

exports.search = async (name) => {
    return await productModel.find({ name: { $regex: name, $options: 'i' } });
}