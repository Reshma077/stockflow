import { useState } from "react";
import Navbar from "../components/Navbar";

function Settings() {
  const [threshold, setThreshold] = useState(5);

  function saveSettings() {
    alert("Settings Saved Successfully");
  }

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Settings</h1>

        <label>Default Low Stock Threshold</label>

        <br />
        <br />

        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
        />

        <br />
        <br />

        <button onClick={saveSettings}>
          Save Settings
        </button>
      </div>
    </>
  );
}

export default Settings;