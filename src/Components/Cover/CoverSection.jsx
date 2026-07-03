
import { GiSunflower } from "react-icons/gi";
// import { PiHeartLotusBold } from "react-icons/pi";
import couple from "../../assets/Img/mukapasangan.png"
import Cincin from  "../../assets/Img/cincinD.png"
import Sprakless from "../../assets/Img/sparkless.png"
import Garis from "../../assets/Img/garisatas.png"
import { IoHeart } from "react-icons/io5";
import { Sparkle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function CoverSection() {
    const navigate = useNavigate();

  return (
    <section
      className="
      min-h-screen
      bg-[#F7F4EF]

      flex
      items-center
      justify-center

      px-5
      py-2
      

      sm:px-8
      md:px-10
      lg:px-14
      "
    >
      <div
        className="
        w-full

        max-w-[360px]
        sm:max-w-[400px]
        md:max-w-[460px]
        lg:max-w-[520px]

        flex
        flex-col
        items-center
        text-center
        "
      >
        {/* <Heading /> */}
         {/* <div className="space-y-2"> */}
      {/* <span className="text-4xl">☀️</span> */}

      {/* <h1
        className="
        uppercase

        font-medium

        tracking-[5px]

        leading-tight

        text-[#8A1C14]

        text-3xl
        sm:text-4xl
        md:text-5xl
        font-feltpen
        italic
        
        "
      >
        These Kids
      </h1> */}

      {/* <h1
        className="
        uppercase

      

        tracking-[5px]

        leading-tight

        text-[#8A1C14]

        text-3xl
        sm:text-4xl
        md:text-5xl
        font-feltpen
        font-black
        italic
        "
      >
        Are Getting
      </h1>

      <h1
        className="
        uppercase

      

        tracking-[5px]

        leading-tight

        text-[#8A1C14]

        text-3xl
        sm:text-4xl
        md:text-5xl
         font-black
        italic
        font-feltpen
        "
      >
        Married
      </h1>
    </div> */}
    <div className=" space-y-2 flex flex-col items-center md:my-9">


  <GiSunflower
  className="
    text-[#C9A227]
    text-5xl
    mb-4
    animate-spin
  "
  style={{
    animationDuration: "25s",
  }}
/>
  <img
 data-aos="zoom-in"
    data-aos-delay="1200"
        src={Cincin}
        alt="Cincin"

        className=" relative xl:top-[10px] xl:left-[-200px] top-[20px]  left-[-30px]  
        w-[60px]

        sm:w-[50px]

        md:w-[100px]

        lg:w-[60px]

     
        object-contain

      -z-5

      pointer-events-none
      select-none

        "
      />

  <h1
   data-aos="zoom-out-right"
    data-aos-delay="0"
    className="
      uppercase
      tracking-[5px]
      leading-tight
      text-[#8A1C14]
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-feltpen
       font-black
        [text-shadow:0.6px_0_0_#8A1C14,-0.6px_0_0_#8A1C14,0_0.6px_0_#8A1C14,0_-0.6px_0_#8A1C14]
    "
  >
    Are Getting
  </h1>

  <h1
   data-aos="zoom-out-right"
    data-aos-delay="600"
    className="
      uppercase
      tracking-[5px]
      leading-tight
      text-[#8A1C14]
      text-3xl
      sm:text-4xl
      md:text-5xl
      lg:text-6xl
      font-feltpen
      font-black
       [text-shadow:0.6px_0_0_#8A1C14,-0.6px_0_0_#8A1C14,0_0.6px_0_#8A1C14,0_-0.6px_0_#8A1C14]
    "
  >
    Married
  </h1>

</div>

        {/* <CoupleIllustration /> */}

         <div
      className="
      relative
      mt-6

      w-full

      flex
      justify-center
      "
    >
      {/* garis */}

       <img
 data-aos="zoom-in"
    data-aos-delay="1400"
        src={Garis}
        alt="Garis"

        className=" absolute xl:top-[-40px] xl:left-[160px] md:top-[-45px] md:left-[140px] 
        xe:top-[-20px] xe:left-[120px]   sm:top-[600px] sm:left-[90px]  top-[-30px] left-[120px]    
        xs:top-[-30px] xs:left-[75px]  
        w-[100px]
  xe:w-[90px]
        sm:w-[600px]

        md:w-[150px]

        lg:w-[100px]
        xl:w-[150px]

      z-10
        object-contain
        "
      />
        {/* <IoHeart className="text-[#8A1C14] text-2xl" /> */}
         <img
 data-aos="zoom-in"
    data-aos-delay="2000"
        src={Sprakless}
        alt="Sprakless"

        className=" absolute xl:top-[-80px] xl:left-3 top-[-50px]  left-3  animate-pulse
        w-[60px]

        sm:w-[50px]

        md:w-[100px]

        lg:w-[100px]

      z-10
        object-contain
        "
      />
      
      <img
        src={couple}
        alt="Couple"

        className="
        w-[200px]

        sm:w-[100px]

        md:w-[260px]

        lg:w-[300px]

        object-contain
        "
      />
       {/* <IoHeart className="text-[#8A1C14] text-2xl" /> */}
       {/* <Sparkle
  className="
    w-5
    h-5
    text-[#8A1C14]
    fill-none
    stroke-[2]
  "
/> */}
{/* tengah */}
     <img
 data-aos="zoom-in"
    data-aos-delay="2500"
        src={Sprakless}
        alt="Sprakless"

        className=" absolute xl:bottom-[150px] xl:right-3 bottom-[100px] right-[50px] animate-pulse
        w-[60px]

        sm:w-[100px]

        md:w-[100px]

        lg:w-[100px]

      z-10
        object-contain
        "
      />
      {/* bawah */}
       <img
 data-aos="zoom-in"
    data-aos-delay="2700"
        src={Sprakless}
        alt="Sprakless"

        className=" absolute xl:bottom-0 xl:left-3 bottom-[-30px] left-0  animate-pulse
        w-[60px]

        sm:w-[100px]

        md:w-[100px]

        lg:w-[100px]

      z-10
        object-contain
       
        "
      />
    </div>

        <div className="mt-5 md:mt-10 ">
          <div className="mt-8 flex items-center justify-center gap-2 ">
            
      <h2
    data-aos="zoom-in-right"
    data-aos-delay="3700"
     
    className="
      text-[#8A1C14]
      text-[20px]
      sm:text-2xl
      md:text-3xl
      font-feltpen
      font-semibold
    "
  >
    Aditya
  </h2>

  <span
    data-aos="zoom-in"
     data-aos-delay="3800"
   
    className="
      text-[#8A1C14]
      text-[20px]
      sm:text-2xl
      md:text-3xl
      font-feltpen
    "
  >
    &
  </span>

  <h2
    data-aos="fade-left"
     data-aos-delay="3500"
  
    className="
      text-[#8A1C14]
      text-[20px]
      sm:text-2xl
      md:text-3xl
      font-feltpen
      font-semibold
    "
  >
    Dinda
  </h2>
  </div>

          {/* <p
            className="
            mt-1

            font-semibold

            text-lg
            sm:text-xl
            md:text-2xl
            font-feltpen
            text-[#8A1C14]
            "
          >
            6.6.26
          </p> */}

          <p className="   text-[#7A5B54] text-xs sm:text-sm md:text-base font-dm italic">
              Kepada Yth.
            </p>

            <p className="   text-[#7A5B54] text-sm sm:text-base md:text-lg font-dm italic">
              Bapak/Ibu/Saudara/i
            </p>

          {/* <p
            className="
            mt-6

            font-medium
          
            text-md
           
           font-dm
            italic
           text-[#7A5B54]
            "
          >
            Kepada YTH
          </p> */}

           <p
           data-aos ="fade-down-left"
            data-aos-delay="4700"
            className="
           

            font-black
            mt-3
            text-md
            md:text-md
            
            font-feltpen
            text-[#8A1C14]
            italic
            "
          >
            Custom Tamu 
          </p>
          
        </div>

        <div className="md:mt-10 mt-2  xs:mt-1  xs:min-h-[100px] w-full">
          {/* <InvitationButton /> */}
             <button 
           
       data-aos ="fade-up-left"
         data-aos-delay="8000"
         onClick={() => {
        navigate("/home");
      }}
      className="
      w-full

max-w-xs

mx-auto

rounded-full

bg-[#8A1C14]
hover:bg-red-600
font-black

text-white

py-3

font-feltpen

shadow-lg

hover:-translate-y-1

hover:shadow-2xl

transition-all

 ">
      Open Invitation
    </button>
        </div>
      </div>
    </section>
  );
}