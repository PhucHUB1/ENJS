import mongoose from 'mongoose';

 const product_schema = new mongoose.Schema({
  product_code: {
    type: String,
  },
  product_name: {
    type: String,
  },

  product_date: {
    type: String,
  },
  product_origin_price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },

  product_store_code: {
    type: String,
  },
});

export const Product = mongoose.model('Product', product_schema);
