import { GiF1Car } from "react-icons/gi";
import BankCard from "./BankCard";
import { FaWhatsapp } from "react-icons/fa";
import { GiftIcon } from "lucide-react";

export default function WeddingGift() {
  return (
    <section className="bg-[#F6F3EF] py-16 px-5">
      <div className="mx-auto max-w-md">
          {/* Candle */}
                <div
                  data-aos="fade-down"
                  className="flex justify-center mb-4"
                >
                 <GiftIcon className=" text-[#8A1C14]
      w-12 h-12
      sm:w-14 sm:h-14
      md:w-16 md:h-16" />
                </div>

        {/* Heading */}
        <div className="text-center">
          <h2
            data-aos="fade-down"
            className="
              font-feltpen
              text-[#8A1C14]
              text-4xl
              sm:text-5xl
              leading-none
              tracking-[0.18em]
              font-black
            "
          >
            Wedding
          </h2>

          <h2
            data-aos="fade-down"
            data-aos-delay="200"
            className="
              font-feltpen
              text-[#8A1C14]
              text-4xl
              sm:text-5xl
              leading-none
              tracking-[0.18em]
              font-black
            "
          >
            Gift
          </h2>
        </div>

        {/* Description */}
        <div
          
          className="
            mt-10
            text-center
            font-feltpen
            text-black
            leading-relaxed
            text-lg
            sm:text-xl
            font-black
          "
        >
          <p data-aos="zoom-out-right"
          data-aos-delay="0">Doa Restu Anda merupakan</p>
          <p data-aos="zoom-out-right"
          data-aos-delay="600">karunia yang sangat berarti bagi kami.</p>

          <div className="mt-3">
            <p data-aos="zoom-out-right"
          data-aos-delay="1200">Dan jika memberi adalah ungkapan tanda kasih,</p>
            <p data-aos="zoom-out-right"
          data-aos-delay="1800">Anda dapat memberi melalui dibawah ini.</p>
          </div>
        </div>

        {/* BANK LIST */}
        <div className="mt-12 space-y-8">

          <BankCard
            bank="BNI"
            accountNumber="1122334455"
            accountName="Dinda Putri"
            color="#E46C1A"
            aosDelay={600}
          />

          <BankCard
            bank="BCA"
            accountNumber="1122334455"
            accountName="Putra Aditya"
            color="#0055A4"
            aosDelay={800}
          />

        </div>

        {/* Gift Info */}
        <div
          data-aos="fade-up"
          data-aos-delay="1000"
          className="
            mt-12
            text-center
            font-feltpen
            text-lg
            sm:text-xl
            leading-relaxed
            font-black
          "
        >
          <p  data-aos="zoom-out-right"
          data-aos-delay="0">Dan bisa mengirimkan hadiah dalam bentuk fisik</p>
          <p  data-aos="zoom-out-right"
          data-aos-delay="600">melalui konfirmasi ke nomor berikut:</p>
        </div>

        {/* WhatsApp */}
        <div
          data-aos="zoom-in"
          data-aos-delay="1200"
          className="mt-8 flex justify-center"
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2

              rounded-xl

              bg-[#8A1C14]
              px-6
              py-3

              text-white
              font-feltpen
              text-lg

              shadow-lg

              transition-all
              duration-300

              hover:scale-105
              hover:bg-[#74170F]
              active:scale-95
            "
          >
            <FaWhatsapp className="text-xl" />
            Nomor WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}