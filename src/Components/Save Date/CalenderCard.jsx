export default function CalendarCard() {
  return (
    <div
      className="
     
    
      border-4
    
       rounded-md
    overflow-hidden
    rotate-[-6deg]
    relative
    mt-6
    shadow-[0_10px_25px_rgba(138,28,20,0.15)]
  
    "
    >
      {/* Hari */}

      <div
        className="
        grid
        grid-cols-3
        border-b-2
        border-t-2
        border-[#8A1C14]

       
        
      "
      >
        <div className="py-2 text-center font-feltpen text-[#8A1C14] font-semibold">
          Jumat
        </div>

        <div
          className="
          py-3
          text-center
          font-feltpen
          text-[#8A1C14]
          border-x-2
          border-[#8A1C14]
          font-semibold
         
        "
        >
          Sabtu
        </div>

        <div className="py-3 text-center font-feltpen text-[#8A1C14] font-semibold">
          Minggu
        </div>
      </div>

      {/* Tanggal */}

      <div
        className="
        grid
        grid-cols-3
        min-h-[100px]
      "
      >
        {/* Jumat */}

        <div className="flex items-center justify-center">
          <span
            className="
            font-feltpen
            text-[#8A1C14]
            text-6xl
          "
          >
            5
          </span>
        </div>

        {/* Sabtu */}

        {/* <div
          className="
          border-x-2
          border-[#8A1C14]
          flex
          items-center
          justify-center
        "
        >
          <div
       
            className="
            w-24
            
            rounded-full
            border-2
            border-[#8A1C14]
            flex
            flex-col
            items-center
            justify-center
          "
          >
            <span
              className="
              font-feltpen
              text-[#8A1C14]
              text-6xl
            "
            >
              6
            </span>

            <span
              className="
              mt-2
              text-sm
              font-feltpen
              text-[#8A1C14]
              rotate-[-10deg]
            "
            >
              D-Day!!
            </span>
          </div>
        </div> */}
        <div
  className="
    border-x-2
    border-[#8A1C14]
    flex
    items-center
    justify-center
  "
>
  <div className="relative w-24 h-24 flex items-center justify-center">
    {/* Lingkaran saja */}
    <div
     data-aos="fade-down-right"
    data-aos-delay="1400"
      className="
        absolute
        inset-0
        rounded-full
        border-y-2
        border-x-black
        border-[#8A1C14]
      "
    />

    {/* Isi tidak dianimasi */}
    <div className="relative flex flex-col items-center justify-center">
      <span
        className="
          font-feltpen
          text-[#8A1C14]
          text-6xl
        "
      >
        6
      </span>

      <span
        className="
          mt-2
          text-sm
          font-feltpen
          text-[#8A1C14]
          rotate-[-10deg]
        "
      >
        D-Day!!
      </span>
    </div>
  </div>
</div>

        {/* Minggu */}

        <div className="flex items-center justify-center">
          <span
            className="
            font-feltpen
            text-[#8A1C14]
            text-6xl
          "
          >
            7
          </span>
        </div>
      </div>
    </div>
  );
}