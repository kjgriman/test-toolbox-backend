const express = require('express')

const FileController = require('../controllers')

const router = express.Router()

router.get('/files/list', FileController.getFilesController)
router.get('/file/:name', FileController.getFileByNameController)
router.get('/files/data', FileController.getFilesDataController)

module.exports = router
