// controller
import productService from "../services/product.service.js";

const getProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.status(200).json({ message: "Lista de productos", payload: products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del sv", error: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    res.status(200).json({ message: "Producto", payload: product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del sv", error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { nombre, precio, disponible } = req.body;
    const newProduct = {
      nombre,
      precio: +precio,
      disponible: disponible || false,
    };
    const product = await productService.saveProduct(newProduct);
    res
      .status(200)
      .json({ message: "Creacion de producto realizada", payload: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del sv", error: error.message });
  }
};

const deleteProduct = async (req, res)=>{
  try {
    const deletedProd = await productService.deleteProd(req.params.id);
    res.status(200).json({ message: "Eliminacion del producto realizada", payload: deletedProd });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del sv", error: error.message });
  }
}

const updateProduct = async (req, res)=>{
  try {
    
    const updatedProd = await productService.updateProd(req.params.id, req.body);
    res.status(200).json({ message: "Actualizacion del producto realizada", payload: updatedProd });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error interno del sv", error: error.message });
  }
}

export default { getProducts, createProduct, getProduct, deleteProduct, updateProduct };
