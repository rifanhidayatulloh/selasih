import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import BannerHero from '../assets/images/banner-hero.png';
import StandardIndustri from '../components/StandardIndustri';
import {
  AlurPengajuan,
  AlurPengajuan1,
  AlurPengajuan2,
  AlurPengajuan3,
  AlurPengajuan4,
  AlurPengajuan5,
  AlurPengajuan6,
  AlurPengajuan7,
  AlurPengajuan8,
  AlurPengajuan9
} from '../components/AlurPengajuan';
import LogoSamsung from '../assets/images/samsung.jpg';
import LogoNabati from '../assets/images/nabati.jpg';
import LogoLazada from '../assets/images/lazada.jpg';
import LogoABC from '../assets/images/ptABC.jpg';
import LogoDanone from '../assets/images/danone.jpg';
import dataPengajuan from '../assets/dataPengajuan';

const Beranda = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#D1EDEB] w-full h-screen first-section">
          <div className="absolute right-0 bottom-0">
            <img className="w-[499px] h-auto" src={BannerHero} alt="banner-hero" />
          </div>
          <div className="container h-full grid grid-cols-12">
            <div className="col-span-7 flex flex-col justify-center h-full">
              <div className="text-[#0C524F] mb-5 text-[49px] font-bold">
                <h1>
                  Bersama{' '}
                  <span className="bg-gradient-to-r from-[#138883] to-[#3EB2AD] text-white rounded-xl py-2 px-3">
                    Industri Hijau
                  </span>
                </h1>
                <h1>membangun dunia lebih baik!</h1>
              </div>
              <article className="text-[#495057] mb-7">
                Penuhi proses dan produk perusahaan Anda dengan standar tinggi untuk turut serta dalam menjaga
                kelestarian lingkungan, mengurangi dampak pencemaran lingkungan, produksi yang ramah lingkungan, dan
                pemakaian sumber daya yang efisien.
              </article>
              <div className="relative flex w-90% flex-col">
                <div className="absolute bottom-4 left-2 max-w-max cursor-pointer text-[#84818A]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <input
                  id="password"
                  type="text"
                  placeholder="Cari Perusahaan, SIH, KBLI Terdaftar"
                  className="w-full pl-10 rounded-lg py-4 text-[16px] pr-3 text-[#84818A] outline-none ring-1 ring-[#c3cad9] focus:ring-2 focus:ring-[#0C524F]"
                />
              </div>
            </div>
            <div className="col-span-5">
              <div className="hidden" />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12">
          <div className="col-span-3 container py-14 gap-10 flex flex-col items-center justify-center bg-[#F5F8FA]">
            <div>
              <div className="relative flex items-center justify-center">
                <p className="text-[40px] text-[#0D6EFD] font-semibold">35</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-[#198754]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </div>
              <p className="text-[#495057]">Perusahaan Tersertifikasi</p>
            </div>
            <div>
              <div className="relative flex items-center justify-center">
                <p className="text-[40px] text-[#0D6EFD] font-semibold">420</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-[#198754]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </div>
              <p className="text-[#495057]">SIH Terbit</p>
            </div>
            <div>
              <div className="relative flex items-center justify-center">
                <p className="text-[40px] text-[#0D6EFD] font-semibold">0.5%</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-[#198754]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </div>
              <p className="text-[#495057]">Penghematan Karbon</p>
            </div>
          </div>
          <div className="col-span-9 container py-14 flex flex-col items-center justify-center">
            <h2 className="text-[#212529] text-[40px] mb-7 font-semibold">Kenali Sertifikasi Industri Hijau</h2>
            <div className="gap-7 px-16 flex flex-col">
              <div className="flex gap-3 items-center">
                <div className="bg-[#17A39D] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                    />
                  </svg>
                </div>
                <p className="text-[18px]">
                  Standar dalam mewujudkan Industri Hijau yang ditetapkan oleh Kementerian Perindustrian.
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-[#17A39D] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                </div>
                <p className="text-[18px]">
                  Pedoman untuk Perusahaan dalam menerapkan Industri Hijau yang bersifat sukarela.
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="bg-[#17A39D] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                </div>
                <p className="text-[18px]">
                  Berkoordinasi dengan Kementerian, Lembaga Pemerintah lain, Asosiasi Industri, Perusahaan Industri &
                  Lembaga terkait untuk menjamin standar sertifikasi sesuai untuk masing-masing bidang usaha.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-14 flex flex-col items-center justify-center">
          <h2 className="text-[#212529] text-[40px] mb-10 font-semibold">
            Manfaat Sertifikasi Industri Hijau bagi Perusahaan
          </h2>
          <div className="grid grid-cols-12 gap-5 w-full">
            <div className="col-span-4 w-full items-center gap-7 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 text-[#17A39D]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>

              <h5 className="text-[#212529] text-[18px] font-semibold">Peningkatan Citra Perusahaan</h5>
              <p className="text-center text-[#21272A] px-5">
                Citra perusahaan akan bertambah di mata konsumen, mitra bisnis, dan masyarakat karena menunjukan
                komitmen perusahaan yang bertanggung jawab lingkungan.
              </p>
            </div>
            <div className="col-span-4 w-full items-center gap-7 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 text-[#17A39D]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                />
              </svg>

              <h5 className="text-[#212529] text-[18px] font-semibold">Unggul dari Pesaing</h5>
              <p className="text-center text-[#21272A] px-5">
                Perusahaan mendapat keunggulan lebih dari pesaing karena konsumen mulai semakin peduli terhadap
                lingkungan.
              </p>
            </div>
            <div className="col-span-4 w-full items-center gap-7 flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-16 text-[#17A39D]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

              <h5 className="text-[#212529] text-[18px] font-semibold">Efisiensi Energi & Biaya</h5>
              <p className="text-center text-[#21272A] px-5">
                Mengurangi konsumsi sumber daya alam yang berlebih. Selain bermanfaat bagi lingkungan, hal ini dapat
                mengurangi biaya operasional jangka panjang perusahaan.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8FA]">
          <div className="container py-14">
            <h2 className="text-[40px] text-center mb-16 font-semibold text-[#212529]">
              Alur Pengajuan Sertifikasi Industri Hijau
            </h2>
            <div className="grid grid-cols-12 w-full gap-x-7 gap-y-16">
              {dataPengajuan.map((item, index) => (
                <>
                  <AlurPengajuan
                    key={index + 1}
                    nomor={item.nomor}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </>
              ))}
              {/* <AlurPengajuan1 />
              <AlurPengajuan2 />
              <AlurPengajuan3 />
              <AlurPengajuan4 />
              <AlurPengajuan8 />
              <AlurPengajuan7 />
              <AlurPengajuan6 />
              <AlurPengajuan5 />
              <AlurPengajuan9 /> */}
            </div>
          </div>
        </section>

        <section className="py-14">
          <h5 className="text-[#212529] text-[20px] mb-10 text-center font-semibold">
            Telah diikuti oleh 35+ Perusahaan Terkemuka
          </h5>
          <div className="flex justify-center items-center gap-10">
            <img className="w-[150px]" src={LogoSamsung} alt="gambar" />
            <img className="w-[100px]" src={LogoNabati} alt="gambar" />
            <img className="w-[100px]" src={LogoDanone} alt="gambar" />
            <img className="w-[150px]" src={LogoLazada} alt="gambar" />
            <img className="w-[80px]" src={LogoABC} alt="gambar" />
          </div>
        </section>

        <section className="bg-[#F5F8FA]">
          <div className="container py-14">
            <h2 className="text-[40px] text-center mb-12 font-semibold text-[#212529]">Standard Industri Hijau</h2>
            <div className="grid grid-cols-12 w-full gap-10">
              <StandardIndustri />
              <StandardIndustri />
              <StandardIndustri />
              <StandardIndustri />
              <StandardIndustri />
              <StandardIndustri />
              <StandardIndustri />
              <StandardIndustri />
              <StandardIndustri />
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: 'url("/wave.svg")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
          className="h-[400px]"
        >
          <div className="container h-full flex flex-col gap-10 items-center justify-center">
            <h2 className="text-[#21272A] text-[40px] font-semibold">Sudah Siap Menjadi Bagian dari Industri Hijau?</h2>
            <button className="ring-2 text-white py-3 px-7 font-semibold bg-[#17A39D] rounded-md ring-[#17A39D]">
              Ambil Sertifikasi
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Beranda;
