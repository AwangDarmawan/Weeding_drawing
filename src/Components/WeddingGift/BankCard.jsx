import PropTypes from "prop-types";
import { FaCopy, FaUniversity } from "react-icons/fa";
import { toast } from "react-toastify";

export default function BankCard({
  bank,
  accountNumber,
  accountName,
  color,

}) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      toast.success("Nomor rekening berhasil disalin 📋");
    } catch (err) {
      toast.error("Gagal menyalin rekening");
    }
  };

  return (
    <div
   
      className="
  relative
    mx-auto

    w-[250px]
    xs:w-[280px]
    sm:w-[300px]
    md:w-[300px]

     rotate-[-6deg]

    rounded-lg
    border-[2.5px]
    border-[#8A1C14]

    bg-[#FBF9F5]

    px-4
    py-2

    shadow-[6px_6px_0px_rgba(0,0,0,0.08)]

    transition-all
    duration-300

    hover:rotate-[-6deg]
    hover:scale-105        
      "
    >
      {/* Sudut seperti kertas */}
      <div className="absolute -top-[3px] left-5 w-10 border-t-[3px] border-[#5B4A42]" />
      <div className="absolute -bottom-[3px] right-5 w-10 border-b-[3px] border-[#5B4A42]" />

      {/* Header */}
      <div className="flex items-center gap-2">
        <div
          className="
           flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      text-white
          "
          style={{ backgroundColor: color }}
        >
          <FaUniversity className="text-xl" />
        </div>

        <div>
          <h3
            className="
              font-bold
              text-3xl
              font-feltpen
              text-[#8A1C14]
            "
          >
            {bank}
          </h3>
        </div>
      </div>

      {/* Nomor Rekening */}
      <div className="mt-3">
        {/* <p className="text-xs text-gray-500 uppercase tracking-wider">
          Nomor Rekening
        </p> */}

        <p
          className="
            
           
            text-md
            font-black
            tracking-[2px]
           
            font-feltpen
            text-[#2F2F2F]
          "
        >
          {accountNumber}
        </p>
      </div>

      {/* Nama */}
      <div className="mt-2">
        <p className="text-xs font-feltpen font-black text-black  tracking-wider">
          Atas Nama
        </p>

        <p
        data-aos="fade-down-right"
        data-aos-delay="2400"
          className="
            mt-1
            font-feltpen
            text-md
            text-[#2F2F2F]
            font-black
          "
        >
          {accountName}
        </p>
      </div>

      {/* Tombol */}
      <div className="mt-3 flex justify-end">
        <button
          onClick={handleCopy}
          className="
            inline-flex
            items-center
            gap-2

            rounded-lg

            bg-[#8A1C14]

            px-4
            py-2

            text-sm
            font-semibold
            text-white

            transition-all
            duration-300

            hover:scale-105
            hover:bg-[#6E150F]

            active:scale-95
          "
        >
          <FaCopy />
          Copy
        </button>
      </div>
    </div>
  );
}

BankCard.propTypes = {
  bank: PropTypes.string.isRequired,
  accountNumber: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
  color: PropTypes.string,
  aosDelay: PropTypes.number,
};