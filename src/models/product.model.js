// model
// import ... from '../config/db-connection.js'
import { db } from "../config/db.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "productos");
const userCollection = collection(db, "usuarios");




export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productsCollection);
    const products = [];
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));

    return products;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const getProduct = async (id) => {
  try {
    const productRef = doc(db, "productos", id);
    const product = await getDoc(productRef);

    if (!product.exists()) {
      throw new Error(`No se encontró el producto con ID: ${id}`);
    }

    return { id: product.id, ...product.data() };
  } catch (error) {
    throw new Error(`Error al obtener el producto: ${error.message}`);
  }
};

export const createProduct = async (product) => {
  try {
    const newProduct = await addDoc(productsCollection, product);
    return newProduct;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const deleteProduct = async (id) => {
  try {
    
    const productRef = doc(db, "productos", id);
    const deletedProd = await deleteDoc(productRef);
    return deletedProd
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

export const updateProduct = async (id, updatedProd) => {
  try {
    const productRef = doc(db, "productos", id);
    const updatedProduct = await updateDoc(productRef,updatedProd);
    return updatedProduct;
  } catch (error) {
    throw new Error("Error", error.message);
  }
};
