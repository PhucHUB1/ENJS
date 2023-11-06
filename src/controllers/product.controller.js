import { Product } from "../models/product.model.js";


export const addProduct = async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    const product = new Product(data);
    await product.save();
    res.status(200).send({ message: 'successful add product' });
  } catch (error) {
    res.send(error);
  }
};

export const showAllProduct = async (req, res) => {
  try {
    const allProduct =  await Product.find();
    res.json(allProduct)

  } catch (error) {
    res.send(error);
  }
};

export const deleteProduct =  async (req, res) => {
  try {
    const allProduct =  await Product.findOneAndDelete({product_code: "A12"});
    res.json("Delete successfully")

  } catch (error) {
    res.send(error);
  }
};
