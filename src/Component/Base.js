import React from "react";
import Navbar from "./Navbar";

export default function Base({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <div
        class="footer mt-5"
        style={{
          backgroundColor: "#f9f9f9",
          height: "15rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div class="container-fluid">
          <div class="text-center" style={{ fontSize: "1.3rem" }}>
            © 2020 TV Clothing | Mahavir Society, Navsari, 396445
          </div>
        </div>
      </div>
    </div>
  );
}
