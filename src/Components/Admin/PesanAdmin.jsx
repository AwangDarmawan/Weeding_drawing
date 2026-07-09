import { useEffect, useState } from "react";


import { Trash2 } from "lucide-react";
import { DeleteAllData, DeleteData, getData } from "../../Services/Api";

function PesanAdmin() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET DATA
    async function fetchPesan() {
    try {
      

      const result = await getData();
    
      setDatas(result);
    //   console.log("resul2",result)
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }
   useEffect(() => {
    fetchPesan();
  }, []);

  // DELETE SATU
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Yakin ingin menghapus pesan ini?"
      );

      if (!confirmDelete) return;

      await DeleteData(id);

      setDatas((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus pesan");
    }
  };

  // DELETE SEMUA
  const handleDeleteAll = async () => {
    try {
      const confirmDelete = window.confirm(
        "Yakin ingin menghapus semua pesan?"
      );

      if (!confirmDelete) return;

      await DeleteAllData();

      setDatas([]);
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus semua pesan");
    }
  };

  return (
      <section
    className="
      min-h-screen
     
      px-4
      sm:px-6
      py-12
    "
  >
    <div className="max-w-5xl mx-auto lg:px-[330px]">

      {/* Heading */}
      <div className="text-center mb-10">
        <p
          data-aos="fade-up"
          className="
           font-feltpen text-[11px] uppercase tracking-[0.35em] text-[#8A1C14]
          "
        >
          Wedding Wishes
        </p>

        <h2
          data-aos="zoom-in"
          className="
              font-feltpen font-semibold italic text-4xl  text-[#8A1C14] sm:text-5xl md:text-5xl lg:text-2xl xl:text-2xl
          "
        >
          Pesan Masuk
        </h2>

        <div className="w-24 h-1 bg-[#8A1C14] mx-auto mt-4 rounded-full" />
      </div>

      {/* Card */}
      <div
        className="
          w-full
         
          rounded-2xl
          shadow-xl
          p-4
          sm:p-6
          md:p-8
        "
      >
        {/* Statistik */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
            justify-between
            mb-6
          "
        >
          <span
            className="
              bg-[#3E5C93]
              font-semibold
              italic
              text-white
              px-4
              py-3
              rounded-lg
              text-center
              font-playfair
              
            "
          >
            Total Pesan : {datas.length}
          </span>

          <button
            onClick={handleDeleteAll}
            className="
              bg-[#8A1C14]
              font-semibold
              hover:bg-red-600
              text-white
              px-4
              py-3
              rounded-lg
              transition
              font-playfair
            "
          >
            Hapus Semua
          </button>
        </div>

        {/* List Pesan */}
        <div className="max-h-[550px] overflow-y-auto space-y-4">
          {loading ? (
            <div className="text-center py-10">
              Loading...
            </div>
          ) : datas.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              Belum ada pesan
            </div>
          ) : (
            datas.map((item) => (
              <div
                key={item.id}
                className="
                   bg-white/20
                  border
                  border-pink-100
                  rounded-xl
                  p-4
                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:justify-between
                    gap-4
                  "
                >
                  {/* Isi Pesan */}
                  <div className="flex-1 break-words bg">
                    <h4
                      className="
                        font-bold
                        text-[#8A1C14]
                        font-space
                        text-base
                        sm:text-lg
                      "
                    >
                      {item.nama}
                    </h4>

                    <p
                      className="
                       text-gray-600 italic
                       font-space
                        mt-2
                        text-sm
                        sm:text-base
                        break-words
                        font-semibold
                      "
                    >
                      {item.pesan}
                    </p>
                  </div>

                  {/* Kehadiran + Delete */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      md:justify-end
                      gap-3
                    "
                  >
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium
                        ${
                          item.kehadiran === "Ya"
                            ? "bg-green-100 text-green-700"
                            : item.kehadiran === "Mungkin"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {item.kehadiran}
                    </span>

                    <button
                      onClick={() =>
                        handleDelete(item.id)
                      }
                      className="
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        p-2
                        rounded-lg
                        transition
                        
                      "
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </section>
  )}

export default PesanAdmin;