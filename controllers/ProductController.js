const productService = require('../services/ProductServices')
const categoryService = require('../services/CategoryServices')

exports.getAll = async () => {
    const products = await productService.getAll();
    return products;
}

exports.getProById = async (categoryId) => {
    const products = await productService.getProById(categoryId);
    return products;
};

exports.getNewProducts = async () => {
    const products = await productService.getNewProducts();
    return products;
}

exports.getHotProducts = async () => {
    const products = await productService.getHotProducts();
    return products;
}


exports.getById = async (id) => {
    const products = await productService.findById(id);
    return products;
}

exports.create = async (name, price, quantity, category, image, description) => {
    const products = await productService.create(name, price, quantity, category, image, description);
     // Kiểm tra xem danh mục đã tồn tại trong cơ sở dữ liệu chưa
     const existingCategory = await categoryService.findById(category.categoryId);
     if (!existingCategory) {
         return res.status(400).json({ message: "Danh mục không tồn tại." });
     }
    return products;
}

exports.update = async (id, name, price, quantity, category, image, description) => {
    const products = await productService.update(id, name, price, quantity, category, image, description);
    return products;
}

exports.delete = async (id) => {
    await productService.delete(id);
}

exports.search = async (name) => {
    return await productService.search(name);
}



