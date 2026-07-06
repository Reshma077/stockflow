const prisma = require("../config/prisma");

// Create Product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      sku,
      description,
      quantity,
      costPrice,
      sellingPrice,
      lowStockThreshold,
      organizationId
    } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        sku,
        description,
        quantity: Number(quantity),
        costPrice: Number(costPrice),
        sellingPrice: Number(sellingPrice),
        lowStockThreshold: Number(lowStockThreshold),
        organizationId: Number(organizationId)
      }
    });

    res.status(201).json(product);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating product"
    });
  }
};

// Get All Products
const getProducts = async (req, res) => {
  try {

    const products = await prisma.product.findMany({
      orderBy: {
        id: "desc"
      }
    });

    res.json(products);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error"
    });
  }
};

// Get Single Product
const getProduct = async (req, res) => {

  try {

    const product = await prisma.product.findUnique({

      where: {
        id: Number(req.params.id)
      }

    });

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: "Error"
    });

  }

};

// Update Product
const updateProduct = async (req, res) => {

  try {

    const product = await prisma.product.update({

      where: {
        id: Number(req.params.id)
      },

      data: req.body

    });

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: "Error"
    });

  }

};

// Delete Product
const deleteProduct = async (req, res) => {

  try {

    await prisma.product.delete({

      where: {
        id: Number(req.params.id)
      }

    });

    res.json({

      message: "Deleted Successfully"

    });

  } catch (error) {

    res.status(500).json({

      message: "Error"

    });

  }

};

module.exports = {

  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct

};