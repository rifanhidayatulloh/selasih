import React from 'react';

const StandardIndustri = () => {
  return (
    <>
      <div className="col-span-4 bg-white rounded-lg p-5">
        <p className="text-[#495057] mb-1 text-[13px]">Industri Besi dan Baja Dasar</p>
        <h6 className="font-semibold text-[18px] mb-3 text-[#212529]">Industri Billet</h6>
        <p className="text-[#495057] mb-3 text-[13px]">
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </p>
        <div className="flex gap-3 justify-between">
          <button className="ring-2 text-white py-1 px-4 bg-[#17A39D] rounded-md ring-[#17A39D]">
            Ajukan Sertifikasi
          </button>
          <button className="ring-2 text-[#17A39D] py-1 px-4 bg-white rounded-md ring-[#17A39D]">Baca Ketentuan</button>
        </div>
      </div>
    </>
  );
};

export default StandardIndustri;
