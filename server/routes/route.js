import express, { Router } from 'express';
import { getNews } from '../controller/news-controller.js';

const route = express.Router();

route.get('/news', getNews);
export default route;