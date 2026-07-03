
import { useEffect, useMemo, useState } from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

import DividerLove from "./DividerLove";
import RsvpForm from "./RsvpForm";
import RsvpCard from "./RsvpCard";
// import RsvpStats from "./RsvpStats";

import { getData } from "../../Services/Api";

export default function RsvpSection() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await getData();

      setDatas(response || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const stats = useMemo(() => {
    return {
      total: datas.length,
      hadir: datas.filter((x) => x.kehadiran === "Ya").length,
      mungkin: datas.filter((x) => x.kehadiran === "Mungkin").length,
      tidak: datas.filter((x) => x.kehadiran === "Tidak").length,
    };
  }, [datas]);

  return (
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
        {/* ================= HEADER ================= */}

        <div
          data-aos="fade-down"
          className="text-center"
        >
          <FaEnvelopeOpenText
            className="
              mx-auto
              text-[#8A1C14]
              text-5xl
              sm:text-6xl
            "
          />

          <h2
            className="
              mt-5

              font-feltpen

              text-[#8A1C14]

              tracking-[0.18em]

              text-4xl
              sm:text-5xl
            "
          >
            RSVP
          </h2>

          <p
            className="
              mt-5

              mx-auto
              max-w-2xl

              font-petit

              text-[#555]

              leading-8

              text-lg
            "
          >
            Mohon konfirmasi kehadiran dan berikan doa terbaik
            untuk kedua mempelai.
          </p>

          <div className="mt-8">
            <DividerLove />
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div
          className="
            mt-16

            grid

            grid-cols-1
            xl:grid-cols-[420px_1fr]

            gap-10
          "
        >
          {/* ================= LEFT ================= */}

          <div
            data-aos="fade-right"
            className="
              rounded-[28px]

              border-[3px]
              border-[#8A1C14]

              bg-[#FBF8F4]

              p-6
              sm:p-8

              shadow-[10px_10px_0px_rgba(138,28,20,.15)]
            "
          >
            <h3
              className="
                text-center

                font-feltpen

                text-[#8A1C14]

                text-3xl
              "
            >
              Konfirmasi
            </h3>

            <p
              className="
                mt-3

                text-center

                text-gray-500

                leading-7
              "
            >
              Isi form di bawah ini untuk mengonfirmasi
              kehadiran Anda.
            </p>

            <div className="mt-8">
              <RsvpForm PropfetchData={fetchData} />
            </div>

            {/* <div className="mt-10">
              <RsvpStats datas={datas} />
            </div> */}
          </div>

          {/* ================= RIGHT ================= */}

          <div>
            <div
              className="
                flex

                items-center
                justify-between

                mb-6

                flex-wrap

                gap-3
              "
            >
              <div>
                <h3
                  className="
                    font-feltpen

                    text-[#8A1C14]

                    text-3xl
                  "
                >
                  Ucapan & Doa
                </h3>

                <p className="text-gray-500 mt-2">
                  {stats.total} Ucapan
                </p>
              </div>
            </div>

            {loading ? (
              <div
                className="
                  h-60

                  rounded-3xl

                  border-2
                  border-dashed
                  border-[#8A1C14]/30

                  flex
                  items-center
                  justify-center
                "
              >
                <p className="text-[#8A1C14] font-semibold">
                  Memuat data...
                </p>
              </div>
            ) : datas.length === 0 ? (
              <div
                className="
                  h-60

                  rounded-3xl

                  border-2
                  border-dashed
                  border-[#8A1C14]/30

                  flex
                  items-center
                  justify-center
                "
              >
                <p className="text-[#8A1C14]">
                  Belum ada ucapan.
                </p>
              </div>
            ) : (
              <div
                className="
                  grid

                  grid-cols-1
                  md:grid-cols-2

                  gap-5
                "
              >
                {datas.map((item, index) => (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >
                    <RsvpCard item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}