import express from 'express';
import { getIndex, getAbout, getContact, getProduct } from '../controllers/mainController.js';

const router = express.Router();

// Define routes
router.get('/', getIndex);
router.get('/about', getAbout);
router.get('/contact', getContact);
//router.post('/contact', contactSent);
router.get('/product/:productId', getProduct);

export default router;
