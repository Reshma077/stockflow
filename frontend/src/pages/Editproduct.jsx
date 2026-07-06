import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    sku: "",
    description: "",
    quantity: "",
    costPrice: "",
    sellingPrice: "",
    lowStockThreshold: "",
    organizationId: 1,
  });

  useEffect(() => {
    async function loadProduct() {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    loadProduct();
  }, [id]);

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/products/${id}`, product);
      alert("Product Updated Successfully");
      navigate("/products");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  }

  return (
    <div style={{ width: "500px", margin: "40px auto" }}>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <br /><br />

        <input
          name="sku"
          value={product.sku}
          onChange={handleChange}
          placeholder="SKU"
        />
        <br /><br />

        <input
          name="description"
          value={product.description || ""}
          onChange={handleChange}
          placeholder="Description"
        />
        <br /><br />

        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
        <br /><br />

        <input
          type="number"
          name="costPrice"
          value={product.costPrice}
          onChange={handleChange}
          placeholder="Cost Price"
        />
        <br /><br />

        <input
          type="number"
          name="sellingPrice"
          value={product.sellingPrice}
          onChange={handleChange}
          placeholder="Selling Price"
        />
        <br /><br />

        <input
          type="number"
          name="lowStockThreshold"
          value={product.lowStockThreshold}
          onChange={handleChange}
          placeholder="Low Stock Threshold"
        />
        <br /><br />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;