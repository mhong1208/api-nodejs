const categoryService = require('../services/CategoryServices')

exports.getAll = async () => {
    const categories = await categoryService.getAll();
    return categories;
}

exports.getById = async (id) => {
    const categories = await categoryService.findById(id);
    return categories;
}

exports.create = async (name, description) => {
    const categories = await categoryService.create(name, description);
    return categories;
}

exports.update = async (id, name, description) => {
    const categories = await categoryService.update(id, name, description);
    return categories;
}

exports.delete = async (id) => {
    await categoryService.delete(id);
}

