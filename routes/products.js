var express = require('express');
var router = express.Router();
const productController = require('../controllers/ProductController')

// lấy danh sách sản phẩm
router.get('/', async(req, res) => {
    try {
        const result = await productController.getAll()
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi lấy danh sách sản phẩm ', error);
        return res.status(500).json({mess: error})
    }
});
// Lấy sản phẩm mới nhất
router.get('/new', async(req, res) => {
    try {
        const result = await productController.getNewProducts()
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi lấy danh sách sản phẩm ', error);
        return res.status(500).json({mess: error})
    }
});

router.get('/hot', async(req, res) => {
    try {
        const result = await productController.getHotProducts()
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi lấy danh sách sản phẩm ', error);
        return res.status(500).json({mess: error})
    }
});

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const result = await productController.getById(id)
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi lấy sản phẩm theo id ', error);
        return res.status(500).json({mess: error})
    }
});

router.get("/category/:categoryId", async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const products = await productController.getProById(categoryId);
        return res.status(200).json(products);
    } catch (error) {
        console.error("Lỗi hiển thị sản phẩm theo mã danh mục:", error.message);
        res.status(500).json({ message: error });
    }
});

// Theem sản phẩm moi
router.post('/', async(req, res) => {
    try {
        let { name, price, quantity, category, image, description } = req.body;
        const result = await productController.create(name, price, quantity, category, image, description)
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi thêm sản phẩm mới ', error);
        return res.status(500).json({mess: error})
    }
});

// cập nhật sản phẩm theo id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const {name, price, quantity, category, image, description} = req.body
        const result = await productController.update(id, name, price, quantity, category, image, description)
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi cập nhật sản phẩm theo id ', error);
        return res.status(500).json({ mess: error })
    }
});

// // xóa danh mục theo id
router.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const result = await productController.delete(id)
        return res.status(200,).json(result)
    } catch (error) {
        console.log('Lỗi xóa sản phẩm theo id ', error);
        return res.status(500).json({mess: error})
    }
})

router.get('/search/:name', async (req, res) => {
    try {
        const name = req.params.name;
        const result = await productController.search(name);
        return res.status(200).json(result);
    } catch (error) {
        console.error("Lỗi:", error.message);
        res.status(500).json({ error: 'Lỗi máy chủ' });
    }
});


module.exports = router;
