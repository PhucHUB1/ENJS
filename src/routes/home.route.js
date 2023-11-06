import express from 'express';
import { addProduct, deleteProduct, showAllProduct } from "../controllers/product.controller.js";

export const home_router = express.Router();

home_router.get('/', (req, res) => {
  async function getProduct() {
    const api_url = "http://localhost:3000/product";
    let fetch_response = await fetch(api_url);
    let json = await fetch_response.json();

    res.render('home/home', {product: json});
    console.log(json);
  }
  getProduct()


});

home_router.get('/product', showAllProduct);

home_router.post('/product', addProduct);

home_router.delete('/product', deleteProduct);