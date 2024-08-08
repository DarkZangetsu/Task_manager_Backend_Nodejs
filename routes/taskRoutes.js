const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { authenticate, isAdmin } = require('../middlewares/auth');

router.post('/', authenticate, isAdmin, taskController.createTask);
router.get('/', authenticate, taskController.getAllTasks);
router.get('/:id', authenticate, taskController.getTaskById);
router.put('/:id', authenticate, taskController.updateTask);
router.delete('/:id', authenticate, isAdmin, taskController.deleteTask);

module.exports = router;