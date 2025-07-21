// services
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../models/product.model.js";

const getAll = async () => {

  return await getAllProducts();
};

const getProductById = async (id) => {
  return await getProduct(id);
  
};

const saveProduct = async (product) => {
  return await createProduct(product);
};

const deleteProd = async (id) => {
  return await deleteProduct(id);
};

const updateProd = async (id, updatedProd) => {
  return await updateProduct(id, updatedProd);
};

export default { getAll, getProductById, saveProduct, deleteProd, updateProd };
