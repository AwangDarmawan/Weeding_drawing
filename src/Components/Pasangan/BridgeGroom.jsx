import PersonCard from "./PersonCard";
import DividerLove from "./DividerLove";

import GroomLarge from "../../assets/Img/BesarCowo.png";
import GroomSmall from "../../assets/Img/smalcowok.png";

import BrideLarge from "../../assets/Img/BesarCewe.png";
import BrideSmall from "../../assets/Img/smallcewek.png";

export default function BrideGroom() {
  return (
    <section
      className="
        px-5
        py-20
        overflow-hidden
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
        "
      >
        {/* ================= TITLE ================= */}

        <div
          data-aos="fade-down"
          className="text-center"
        >
          {/* <p
            className="
              font-feltpen
              text-[#8A1C14]
              tracking-[0.35em]

              text-sm
              sm:text-base
            "
          >
            THE WEDDING OF
          </p> */}

          <h2
            className="
              mt-3

              font-feltpen
              font-black

              text-[#8A1C14]

              tracking-[0.15em]

              text-4xl
              sm:text-5xl
              lg:text-6xl
            "
          >
            BRIDE & GROOM
          </h2>
        </div>

        {/* Divider */}

        <div className="mt-10">
          <DividerLove />
        </div>

        {/* ================= CONTENT ================= */}

        <div
          className="
            mt-16

            grid

            grid-cols-1
            lg:grid-cols-3

            gap-20
            lg:gap-12

            items-center
          "
        >
          {/* ================= GROOM ================= */}

          <PersonCard
            reverse={false}
            largePhoto={GroomLarge}
            smallPhoto={GroomSmall}
            name="Aditya"
            nickname="The Groom"
            father="Putra dari"
            parent="Bapak Ahmad & Ibu Siti"
            description="Pria sederhana yang percaya bahwa cinta terbaik adalah tumbuh bersama dan saling menguatkan."
          />

          {/* CENTER */}

          <div
            data-aos="zoom-in"
            className="
              hidden
              lg:flex

              flex-col
              items-center
              justify-center

              text-center
            "
          >
            <div
              className="
                w-20
                h-[2px]
                bg-[#8A1C14]
              "
            />

            <div
              className="
                my-5

                text-5xl
              "
            >
              🤍
            </div>

            <div
              className="
                w-20
                h-[2px]
                bg-[#8A1C14]
              "
            />

            <p
              className="
                mt-8

                font-petit

                text-[#8A1C14]

                text-2xl

                leading-relaxed
              "
            >
              Two souls,
              <br />
              One Promise.
            </p>
          </div>

          {/* ================= BRIDE ================= */}

          <PersonCard
            reverse
            largePhoto={BrideLarge}
            smallPhoto={BrideSmall}
            name="Dinda"
            nickname="The Bride"
            father="Putri dari"
            parent="Bapak Bambang & Ibu Rina"
            description="Wanita yang percaya bahwa perjalanan indah dimulai dari dua hati yang saling menerima."
          />
        </div>

        {/* MOBILE QUOTE */}

        <div
          data-aos="fade-up"
          className="
            lg:hidden

            mt-16

            text-center
          "
        >
          <DividerLove />

          <p
            className="
              mt-6

              font-petit

              text-[#8A1C14]

              text-xl

              leading-relaxed
            "
          >
            Two souls,
            <br />
            One Promise.
          </p>
        </div>
      </div>
    </section>
  );
}