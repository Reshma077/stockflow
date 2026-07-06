import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  async function deleteProduct(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${id}`);

      alert("Product Deleted Successfully");

      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      alert("Error deleting product");
    }
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.sku.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>📦 StockFlow - Products</h1>

        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search by Name or SKU"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              width: "250px",
              marginRight: "20px",
            }}
          />

          <Link to="/add-product">
            <button>+ Add Product</button>
          </Link>
        </div>

        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          width="100%"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>SKU</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Cost Price</th>
              <th>Selling Price</th>
              <th>Low Stock</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.sku}</td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>{product.costPrice}</td>
                  <td>{product.sellingPrice}</td>
                  <td>{product.lowStockThreshold}</td>

                  <td>
                    <button
                      onClick={() =>
                        navigate(`/edit-product/${product.id}`)
                      }
                    >
                      Edit
                    </button>
                  </td>

                  <td>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;