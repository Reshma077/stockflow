const prisma = require("../config/prisma");

const getDashboard = async (req, res) => {
  try {
    const totalProducts = await prisma.product.count();

    const products = await prisma.product.findMany();

    const totalQuantity = products.reduce(
      (sum, product) => sum + product.quantity,
      0
    );

    const lowStock = await prisma.product.findMany({
      where: {
        quantity: {
          lte: 5
        }
      }
    });

    res.json({
      totalProducts,
      totalQuantity,
      lowStock
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Dashboard Error"
    });
  }
};

module.exports = {
  getDashboard
};