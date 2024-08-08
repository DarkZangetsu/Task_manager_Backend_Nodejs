const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const { name, lastname, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, lastname, email, password: hashedPassword, role });
    res.status(201).json({ message: 'Utilisateur créé avec succès', userId: user.id });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user.id, name: user.name, lastname: user.lastname, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion', error });
  }
};