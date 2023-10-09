import { Router } from "express";
import Product from "../dao/dbManager/products.js";

const productRouter = Router();
const productManager = new Product();

//!!  POST PRODUCT
//Agregar un producto
productRouter.post("/", async (req, res) => {
  let { title, description, price, image, stock } = req.body;

  const newProduct = {
    title: title,
    description: description,
    price: price,
    image: image,
    stock: stock,
  };

  res.send(await productManager.postProduct(newProduct));
});

//!!  GET PRODUCTS
// Consulta de todos los productos con límite opcional
productRouter.get("/", async (req, res) => {
  try {
    const products = await productManager.getAllProducts();
    res.send({ status: "succes", payload: products });
  } catch (error) {
    console.error("Error en la ruta GET /products:", error);
  }
});

//!!  UPDATE PRODUCT
//Actualizar un producto
productRouter.put("/:idProduct", async (req, res) => {
  let { idProduct } = req.params;
  let productReplace = req.body;

  let result = await productManager.updateProduct(idProduct, productReplace)
  res.send({ status: "sucess", payload: result})
});

//!!  DELETE PRODUCT
//Eliminar un producto
productRouter.delete("/:idProduct", async (req, res) => {
  let { idProduct} = req.params
  let result = await productManager.deleteProduct(idProduct)
  res.send("Producto Eliminado")
});

export default productRouter;
