const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const submitFeedback = async (req, res) => {
  try {
    const { name, email, message, category } = req.body;
    const feedback = await prisma.feedback.create({
      data: { name, email, message, category }
    });
    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

const getAllFeedback = async (req, res) => {
  try {
    const feedbackList = await prisma.feedback.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json({ success: true, data: feedbackList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = {
  submitFeedback,
  getAllFeedback,
};
