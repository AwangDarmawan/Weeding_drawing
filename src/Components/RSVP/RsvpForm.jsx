import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { CreatePesan } from "../../Services/Api";
import {
  FaUser,
  FaEnvelopeOpenText,
  FaPaperPlane,
} from "react-icons/fa";

export default function RsvpForm({ PropfetchData }) {
  const [form, setForm] = useState({
    nama: "",
    kehadiran: "Ya",
    pesan: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nama.trim()) {
      toast.warning("Nama wajib diisi");
      return;
    }

    try {
      setLoading(true);

      await CreatePesan(form);

      toast.success("Terima kasih atas konfirmasinya ❤️");

      setForm({
        nama: "",
        kehadiran: "Ya",
        pesan: "",
      });

      PropfetchData();
    } catch (error) {
      toast.error("Gagal mengirim RSVP");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
       mx-auto mt-6 max-w-3xl space-y-6
      "
    >
      {/* Nama */}
      <div className="  px-5
            py-4">
        <label
          className="
            mb-2
            flex
            items-center
            gap-2

            font-feltpen
            text-lg
            text-[#8A1C14]
          "
        >
          <FaUser />
          Nama
        </label>

        <input
          type="text"
          name="nama"
          value={form.nama}
          onChange={handleChange}
          placeholder="Masukkan nama Anda"
          className="
            w-full

            rounded-xl

            border-2
            border-[#8A1C14]/20

            bg-white

            px-5
            py-3

            outline-none

            transition

            focus:border-[#8A1C14]
            focus:ring-2
            focus:ring-[#8A1C14]/10
          "
        />
      </div>

      {/* Kehadiran */}
      <div className="  px-5
            py-4">
        <label
          className="
            mb-2
            flex
            items-center
            gap-2

            font-feltpen
            text-lg
            text-[#8A1C14]
          "
        >
          <FaEnvelopeOpenText />
          Kehadiran
        </label>

        <select
          name="kehadiran"
          value={form.kehadiran}
          onChange={handleChange}
          className="
           px-5
            py-4
            w-full

            rounded-xl

            border-2
            border-[#8A1C14]/20

            bg-white

           

            outline-none

            transition

            focus:border-[#8A1C14]
            focus:ring-2
            focus:ring-[#8A1C14]/10
          "
        >
          <option value="Ya">✅ Hadir</option>
          <option value="Mungkin">🤔 Mungkin</option>
          <option value="Tidak">❌ Tidak Hadir</option>
        </select>
      </div>

      {/* Pesan */}
      <div className="  px-5
            py-4">
        <label
          className="
            mb-2
            flex
            items-center
            gap-2

            font-feltpen
            text-lg
            text-[#8A1C14]
          "
        >
          💌 Ucapan & Doa
        </label>

        <textarea
          rows={5}
          name="pesan"
          value={form.pesan}
          onChange={handleChange}
          placeholder="Tulis doa dan harapan terbaik..."
          className="
            w-full

            resize-none

            rounded-xl

            border-2
            border-[#8A1C14]/20

            bg-white

            px-5
            py-4

            outline-none

            transition

            focus:border-[#8A1C14]
            focus:ring-2
            focus:ring-[#8A1C14]/10
          "
        />
      </div>

      {/* Button */}
      
      <button
        type="submit"
        disabled={loading}
        className="
        mx-auto
            px-10
            py-4
            
          flex
      
          items-center
          justify-center
          gap-2

          rounded-xl

          bg-[#8A1C14]

        

          font-feltpen
          text-lg
          text-white

          transition-all
          duration-300

          hover:scale-[1.02]
          hover:bg-[#73160F]

          active:scale-95

          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        <FaPaperPlane />

        {loading ? "Mengirim..." : "Kirim RSVP"}
      </button>
      
    </form>
  );
}

RsvpForm.propTypes = {
  PropfetchData: PropTypes.func.isRequired,
};