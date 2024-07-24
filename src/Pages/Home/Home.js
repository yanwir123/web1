// src/components/Home.js

import React from "react";
import "./Home.css";
import OrderButton from "../../Components/Scene/Order/OrderButton";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SafetyDividerIcon from "@mui/icons-material/Check";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Wellcome To </h1>
        <h1>TOILETID</h1>
        <p>
          {" "}
          ToiletId Adalah layanan Perbaikan dan solusi anda dengan permasalah
          toilet/wc
        </p>
        <p> Dengan Pekerja yang profesional dan Pelanyanan yang cepat </p>
        <p> Wilayah Kerja kami adalah se-jabedetabek </p>
      </div>
      <div className="mid">
        <h3>Mengapa Anda Harus Memakai Jasa Kami </h3>
      </div>
      <div className="home-cards">
        <div className="card">
          <h3>Tenaga Kerja Profesional</h3>
          <BuildCircleIcon className="service-icon" />
          <p>
            Tenaga Kerja dari kami adalah pekerja yang sudah profesional dan
            berpengalaman dalam bidang ini
          </p>
        </div>
        <div className="card">
          <h3> Hasil Yang Anda Dapatkan </h3>
          <SafetyDividerIcon className="service-icon" />
          <p>
            Para Pekerja akan memaksimalkan ketika ada pengerjaan toilet
            tersumbat/wc penuh, Dengan seketika akan lancar tampa harus
            membongkar closet atau sepitank
          </p>
        </div>
        <div className="card">
          <h3>Biaya Jasa Yang Terjangkau</h3>
          <MonetizationOnIcon className="service-icon" />
          <p>
            MonetizationOn ToiledId memberikan harga yang lebih miring dibanding
            Kompetitor atau penyedia jasa lainnya, Dengan mengutamakan kualitas
            kerja dan hasil yang maksimal
          </p>
        </div>
      </div>
      <div className="last">
        <h3>Sedikit Mengenai ToiletId</h3>
      </div>
      <div className="home-content">
        <p>
          Kami sebagai spesialis permasalahan toilet/wc anda, yang terjangkau
          dengan pelayanan customer service 24 Jam ,yang melayani jasa sedot wc,
          permasalahan toilet mampet, perbaikan saluran air, dan sepitank penuh
          dengan proses cepat dan hasil maksimal
        </p>
        <p>
          Anda Tidak Perlu khawatir karena tenaga kerja dari Toilet.Id adalah
          para profesional dan sudah berpengalaman dengan menggunakan alat -
          alat memadai, dengan kami sangat meperhatikan hasil yang akan di
          dapatka oleh anda dan kepuasan customer adalah target kami
        </p>
        <p>
          Untuk Informasi yang lebih lengkap ada pada menu 3 garis pada website
          lalu bisa pilih About, Home, Services, Concact{" "}
        </p>
      </div>
      <OrderButton />
    </div>
  );
};

export default Home;
