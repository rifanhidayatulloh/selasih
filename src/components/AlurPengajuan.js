import React from 'react';

const AlurPengajuan = ({ nomor, icon, title, description }) => {
  return (
    <>
      <div className="lg:col-span-3 sm:col-span-6 md:col-span-4 col-span-6">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">{nomor}</p>
            </div>

            <div className="flex items-center justify-center">{icon}</div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">{title}</h5>
        <p className="text-center text-[#212529] px-6">{description}</p>
      </div>
    </>
  );
};

const AlurPengajuan1 = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">1</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full ring-2 ring-[#17A39D] text-[#17A39D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">Pendaftaran</h5>
        <p className="text-center text-[#212529] px-6">
          Setelah login/register, Perusahaan Industri mengisi form pengajuan beserta dokumen persyaratan tertentu.
        </p>
      </div>
    </>
  );
};
const AlurPengajuan2 = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">2</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full ring-2 ring-[#17A39D] text-[#17A39D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">Pembayaran</h5>
        <p className="text-center text-[#212529] px-6">
          Perusahaan dapat melanjutkan pengajuan sertifikasi setelah melakukan pembayaran.
        </p>
      </div>
    </>
  );
};
const AlurPengajuan3 = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">3</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full ring-2 ring-[#17A39D] text-[#17A39D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">Pengecekan Dokumen</h5>
        <p className="text-center text-[#212529] px-6">
          LSIH melakukan pengecekan & kelengkapan dokumen persyaratan Perusahaan
        </p>
      </div>
    </>
  );
};
const AlurPengajuan4 = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">4</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full ring-2 ring-[#17A39D] text-[#17A39D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">Penunjukan Auditor</h5>
        <p className="text-center text-[#212529] px-6">
          LSIH menugaskan 2 auditor untuk melakukan audit pada tahap berikutnya.
        </p>
      </div>
    </>
  );
};
const AlurPengajuan5 = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">5</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full ring-2 ring-[#17A39D] text-[#17A39D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">Audit Kecukupan</h5>
        <p className="text-center text-[#212529] px-6">
          Pemeriksaan kelayakan data dan dokumen terkait dengan persyaratan aspek teknis & manajemen.
        </p>
      </div>
    </>
  );
};
const AlurPengajuan6 = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">6</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full ring-2 ring-[#17A39D] text-[#17A39D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">Audit Kesesuaian</h5>
        <p className="text-center text-[#212529] px-6">
          Pemeriksaan seluruh informasi, proses, & verifikasi data pemenuhan persyaratan Sertifikasi Industri Hijau.
        </p>
      </div>
    </>
  );
};
const AlurPengajuan7 = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">7</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full ring-2 ring-[#17A39D] text-[#17A39D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">Evaluasi</h5>
        <p className="text-center text-[#212529] px-6">LSIH mengevaluasi seluruh informasi dan hasil audit.</p>
      </div>
    </>
  );
};
const AlurPengajuan8 = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">8</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full ring-2 ring-[#17A39D] text-[#17A39D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">Penerbitan Sertifikat</h5>
        <p className="text-center text-[#212529] px-6">
          LSIH menerbitkan sertifikat industri hijau untuk perusahaan yang telah memenuhi persyaratan.
        </p>
      </div>
    </>
  );
};
const AlurPengajuan9 = () => {
  return (
    <>
      <div className="col-span-3">
        <div className="mb-5 w-full flex items-center justify-center">
          <div className=" relative w-25%">
            <div className="rounded-full absolute -left-1 -top-5 flex items-center justify-center bg-[#17A39D] size-8 ">
              <p className="text-white text-center">9</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="p-4 rounded-full ring-2 ring-[#17A39D] text-[#17A39D]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-[#212529] text-[18px] mb-5 text-center font-semibold">
          Perusahaan dapat memakai Logo Industri Hijau
        </h5>
      </div>
    </>
  );
};

export {
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
};
