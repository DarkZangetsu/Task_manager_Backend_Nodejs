const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, id_person: req.user.id });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la tâche', error });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ include: 'owner' });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des tâches', error });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id, { include: 'owner' });
    if (!task) {
      return res.status(404).json({ message: 'Tâche non trouvée' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la tâche', error });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const [updated] = await Task.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedTask = await Task.findByPk(req.params.id, { include: 'owner' });
      return res.json(updatedTask);
    }
    throw new Error('Tâche non trouvée');
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la tâche', error });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.destroy({ where: { id: req.params.id } });
    if (deleted) {
      return res.json({ message: 'Tâche supprimée avec succès' });
    }
    throw new Error('Tâche non trouvée');
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la tâche', error });
  }
};