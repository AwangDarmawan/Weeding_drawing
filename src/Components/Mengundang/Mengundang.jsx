import React from 'react'
import DividerLove from '../RSVP/DividerLove'

function Mengundang() {
  return (
    <>
       <section
      id="rsvp"
      className="
        px-5
        py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
        "
      >
      {/* ================= TURUT MENGUNDANG ================= */}

<div
  data-aos="fade-up"
  className="
    mt-20

    rounded-[28px]

    border-[3px]
    border-[#8A1C14]

    bg-[#FBF8F4]

    p-8
    sm:p-12

    shadow-[10px_10px_0px_rgba(138,28,20,.15)]
  "
>
  <h3
    className="
      text-center

      font-feltpen

      text-[#8A1C14]

      text-4xl
    "
  >
    Turut Mengundang
  </h3>

  <p
    className="
      mt-4

      text-center

      text-gray-500

      max-w-2xl

      mx-auto

      leading-8
    "
  >
    Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
    Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu
    kepada kedua mempelai.
  </p>

  <div
    className="
      mt-10

      grid

      grid-cols-1
      md:grid-cols-2

      gap-8

      text-center
    "
  >
    <div>
      <h4 className="font-semibold text-[#8A1C14] text-xl italic mb-3">
        Keluarga Besar Mempelai Pria
      </h4>

      <ul className="space-y-2 text-gray-700 leading-7">
        <li>Bapak Ahmad</li>
        <li>Ibu Siti</li>
        <li>Keluarga Besar Bani Ahmad</li>
      </ul>
    </div>

    <div>
      <h4 className="font-semibold text-[#8A1C14] text-xl mb-3 italic">
        Keluarga Besar Mempelai Wanita
      </h4>

      <ul className="space-y-2 text-gray-700 leading-7">
        <li>Bapak Budi</li>
        <li>Ibu Rina</li>
        <li>Keluarga Besar Bani Budi</li>
      </ul>
    </div>
  </div>

  <div className="mt-10 flex justify-center">
    <DividerLove/>
  </div>
</div>
</div>
</section>
    </>
  )
}

export default Mengundang
