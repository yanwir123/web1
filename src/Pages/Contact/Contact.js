// src/components/Contact.js

import React, { useState } from "react";
import "./Contact.css";
import OrderButton from "../../Components/Scene/Order/OrderButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [alamat, setAlamat] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `Nama: ${name}%0AAlamat: ${alamat}%0APesan: ${message}`;
    const whatsappUrl = `https://wa.me/+6281574633530?text=${formattedMessage}`;

    window.location.href = whatsappUrl;
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Hubungi Kami di TOILETID</h1>
        <p>
          Kami di TOILETID selalu siap membantu Anda dengan segala kebutuhan
          terkait produk dan layanan kami. Jangan ragu untuk menghubungi kami
          jika Anda memiliki pertanyaan, membutuhkan bantuan, atau ingin
          memberikan masukan. Kepuasan Anda adalah prioritas utama kami.
        </p>
        <h1>Informasi Kontak</h1>
        <h2>Alamat Kantor</h2>
        <p>
          TOILETID Puri Permai 3 blok A6 no.04, Pasir Nangka, Kec. Tigaraksa,
          Kabupaten Tangerang, Banten 15720
        </p>
        <h2>Telepon</h2>
        <p>+62815-7463-3530</p>
        <h2>Jam Operasional</h2>
        <p>Senin - Minggu : Layanan 24 Jam</p>
        <h1>Media Sosial Kami </h1>
        <p>
          Ikuti kami di media sosial untuk mendapatkan informasi terbaru tentang
          produk, layanan, dan promo spesial dari TOILETID.
        </p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/toiletid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="social-icon facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/toiletid"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="social-icon instagram"
            />
          </a>
          <a
            href="https://wa.me/+6281574633530"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              className="social-icon whatsapp"
            />
          </a>
        </div>
        <h1>Peta Lokasi</h1>
        <p>
          Temukan lokasi kami dengan mudah melalui peta di bawah ini. Kami
          senang menerima kunjungan Anda di kantor kami.
        </p>
        <h1>Layanan Pelanggan 24/7</h1>
        <p>
          Kami berkomitmen untuk memberikan layanan pelanggan terbaik. Tim kami
          siap membantu Anda 24 jam sehari, 7 hari seminggu. Apapun kebutuhan
          Anda, jangan ragu untuk menghubungi kami kapan saja.
        </p>
        <h2>Formulir Kontak</h2>
        <p>
          Jika Anda lebih suka menghubungi kami secara online, silakan isi
          formulir di bawah ini dengan informasi yang diperlukan. Kami akan
          menghubungi Anda sesegera mungkin.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nama:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Alamat:
            <input
              type="text"
              name="alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              required
            />
          </label>
          <label>
            Pesan Keluhan:
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit">Kirim</button>
        </form>
      </div>
      <OrderButton />
    </div>
  );
};

export default Contact;
