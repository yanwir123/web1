// src/components/Services.js

import React from "react";
import "./Service.css";
import OrderButton from "../../Components/Scene/Order/OrderButton";

import pemeriksaanAwalImg from "../../Asset2/pengecekan.jpg";
import penyedotanLimbahImg from "../../Asset2/penyedotan.jpg";
import pengurasanTankiSeptikImg from "../../Asset2/pdtn 2.jpg";
import pembersihanSaluranImg from "../../Asset2/conten cd3.png";
import penangananWcMampetImg from "../../Asset2/permsalahan wc mampet.jpg";
import pemeliharaanBerkalaImg from "../../Asset2/conten cd4.png";
import pengolahanLimbahImg from "../../Asset2/pool pembuangan 2.mp4";
import laporanDanRekomendasiImg from "../../Asset2/1.png";

const Services = () => {
  return (
    <div className="services">
      <div className="services-content">
        <h1>Daftar Pekerjaan dalam Layanan Sedot WC Toiletid</h1>
        <div className="service-list">
          <div className="service-item">
            <h2>Pemeriksaan Awal</h2>
            <img
              src={pemeriksaanAwalImg}
              alt="Pemeriksaan Awal"
              className="service-image"
            />
            <p>
              Melakukan penilaian kondisi tangki septik dan sistem pembuangan
              limbah.
            </p>
          </div>
          <div className="service-item">
            <h2>Penyedotan Limbah</h2>
            <img
              src={penyedotanLimbahImg}
              alt="Penyedotan Limbah"
              className="service-image"
            />
            <p>
              {" "}
              Menyedot limbah dari tangki septik menggunakan peralatan modern.
            </p>
          </div>
          <div className="service-item">
            <h2>Pengurasan Tangki Septik</h2>
            <img
              src={pengurasanTankiSeptikImg}
              alt="Pengurasan Tanki Septik"
              className="service-image"
            />
            <p>Membersihkan dan menguras tangki septik hingga bersih.</p>
          </div>
          <div className="service-item">
            <h2>Pembersihan Saluran</h2>
            <img
              src={pembersihanSaluranImg}
              alt="Pembersihan Saluran"
              className="service-image"
            />
            <p>Membersihkan saluran pembuangan untuk mencegah penyumbatan.</p>
          </div>
          <div className="service-item">
            <h2>Penanganan WC Mampet</h2>
            <img
              src={penangananWcMampetImg}
              alt="Penanganan Wc Mampet"
              className="service-image"
            />
            <p>Mengatasi masalah WC mampet dengan cepat dan efisien.</p>
          </div>
          <div className="service-item">
            <h2>Pemeliharaan Berkala</h2>
            <img
              src={pemeliharaanBerkalaImg}
              alt="Pemeliharaan Berkala"
              className="service-image"
            />
            <p>
              Menyediakan layanan pemeliharaan berkala untuk menjaga sistem
              pembuangan limbah tetap optimal.
            </p>
          </div>
          <div className="service-item">
            <h2>Pengolahan Limbah</h2>
            <video controls className="service-video">
              <source src={pengolahanLimbahImg} type="video/mp4" />
            </video>
            <p>
              Mengelola dan membuang limbah dengan cara yang ramah lingkungan
              sesuai dengan peraturan yang berlaku.
            </p>
          </div>
          <div className="service-item">
            <h2>Laporan dan Rekomendasi</h2>
            <img
              src={laporanDanRekomendasiImg}
              alt="Laporan Dan Rekomendasi"
              className="service-image"
            />
            <p>
              Memberikan laporan lengkap tentang kondisi sistem pembuangan dan
              rekomendasi perawatan.
            </p>
          </div>
          <h2>Hubungi Kami Sekarang!</h2>
          <p>
            Jangan biarkan masalah WC mengganggu kenyamanan Anda. Hubungi
            TOILETID sekarang untuk mendapatkan layanan sedot WC profesional dan
            terpercaya. Kami siap membantu Anda 24/7 dengan layanan terbaik dan
            harga terjangkau.
            <br />
            <br />
            TOILETID - Solusi Terbaik untuk Kebutuhan Toilet dan Sedot WC Anda!
          </p>
        </div>
      </div>
      <OrderButton />
    </div>
  );
};

export default Services;
