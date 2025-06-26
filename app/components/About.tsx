import React from 'react'

export default function About() {
  return (
    <div className="About bg-gray-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Tentang Kami
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Kami adalah tim yang berdedikasi untuk memberikan solusi terbaik bagi
          kebutuhan Anda. Dengan pengalaman bertahun-tahun, kami berkomitmen
          untuk memberikan layanan berkualitas tinggi dan inovasi yang
          berkelanjutan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-500 mb-4">
              Profesionalisme
            </h2>
            <p className="text-gray-600">
              Kami bekerja dengan standar profesional yang tinggi untuk
              memastikan kepuasan pelanggan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-500 mb-4">
              Inovasi
            </h2>
            <p className="text-gray-600">
              Kami selalu mencari cara baru untuk meningkatkan layanan dan
              produk kami.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-500 mb-4">
              Kepercayaan
            </h2>
            <p className="text-gray-600">
              Kepercayaan pelanggan adalah prioritas utama kami dalam setiap
              langkah yang kami ambil.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
