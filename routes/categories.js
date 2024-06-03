var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/CategoryController');
const authen = require('../middleware/authen')

// lấy danh sách danh mục
router.get('/',[authen], async(req, res) => {
    try {
        const result = await categoryController.getAll()
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi lấy danh sách danh mục ', error);
        return res.status(500).json({mess: error})
    }
});

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const result = await categoryController.getById(id)
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi lấy danh sách danh mục ', error);
        return res.status(500).json({mess: error})
    }
});

// Theem danh muc moi
router.post('/', async(req, res) => {
    try {
        let { name, description } = req.body;
        const result = await categoryController.create(name, description)
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi thêm danh mục mới ', error);
        return res.status(500).json({mess: error})
    }
});

// cập nhật danh muc theo id
router.put('/:id', async(req, res) => {
    try {
        let { id } = req.params;
        let { name, description } = req.body;
        const result = await categoryController.update(id, name, description)
        return res.status(200).json(result)
    } catch (error) {
        console.log('Lỗi cập nhật danh mục', error);
        return res.status(500).json({mess: error})
    }
});

// xóa danh mục theo id
router.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params
        const result = await categoryController.delete(id)
        return res.status(200,).json(result)
    } catch (error) {
        console.log('Lỗi xóa sản phẩm theo id ', error);
        return res.status(500).json({mess: error})
    }
})


module.exports = router;
