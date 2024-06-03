const categoryModel = require('../models/CategoryModel');

exports.getAll = async () => {
    const categories = await categoryModel.find();
    return categories
};

exports.create = async (name, description) => {
    const model = new categoryModel({name, description});
    await model.save();
    return model;
}

exports.update = async (id, name, description) => {
    const model = await categoryModel.findByIdAndUpdate(id, {name, description});
    return model;
}

exports.delete = async (id) => {
   await categoryModel.findByIdAndDelete(_id = id);
}

exports.findById = async (id) => {
    try {
        // Tìm danh mục theo ID
        const category = await categoryModel.findOne({ _id: id });
        return category;
    } catch (error) {
        throw error;
    }
}