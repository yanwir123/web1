// src/components/OrderButton.js

import React from "react";
import "./OrderButton.css";

const OrderButton = () => {
  const handleOrderClick = () => {
    const phoneNumber = "+6281574633530"; // Ganti dengan nomor WhatsApp Anda
    const message = "Halo, saya tertarik dengan jasa anda.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button className="order-button" onClick={handleOrderClick}>
      Pesan Sekarang
    </button>
  );
};

export default OrderButton;
