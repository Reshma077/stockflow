import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    sku: "",
    description: "",
    quantity: "",
    costPrice: "",
    sellingPrice: "",
    lowStockThreshold: "",
    organizationId: 1
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/products", product);

      alert("Product Added Successfully");

      navigate("/products");

    } catch (err) {
      console.log(err);
      alert("Error Adding Product");
    }
  };

  return (
    <div style={{ width: "500px", margin: "40px auto" }}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="sku"
          placeholder="SKU"
          onChange={handleChange}
        />

        <br /><br />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="costPrice"
          placeholder="Cost Price"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="sellingPrice"
          placeholder="Selling Price"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="lowStockThreshold"
          placeholder="Low Stock Threshold"
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Add Product
        </button>

      </form>

    </div>
  );
}

export default AddProduct;