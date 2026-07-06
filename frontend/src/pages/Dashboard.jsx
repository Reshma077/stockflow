import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Dashboard() {
  const [data, setData] = useState({
    totalProducts: 0,
    totalQuantity: 0,
    lowStock: [],
  });

  useEffect(() => {
  async function loadData() {
    try {
      const res = await api.get("/dashboard");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  loadData();
}, []);

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Dashboard</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              width: "220px",
            }}
          >
            <h3>Total Products</h3>
            <h2>{data.totalProducts}</h2>
          </div>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              width: "220px",
            }}
          >
            <h3>Total Quantity</h3>
            <h2>{data.totalQuantity}</h2>
          </div>
        </div>

        <h2>Low Stock Products</h2>

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
              <th>Quantity</th>
              <th>Low Stock Threshold</th>
            </tr>
          </thead>

          <tbody>
            {data.lowStock.length > 0 ? (
              data.lowStock.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.sku}</td>
                  <td>{product.quantity}</td>
                  <td>{product.lowStockThreshold}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No Low Stock Products
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Dashboard;