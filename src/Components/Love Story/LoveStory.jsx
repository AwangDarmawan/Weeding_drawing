import Timeline from "./Timeline";

const stories = [
   {
    title: "Awal Pertemuan",
    content:
      "Semua berawal dari sebuah pertemuan sederhana. Siapa sangka, perkenalan itu menjadi awal dari kisah indah yang kami jalani bersama.",
  },
  {
    title: "Perjalanan Bersama",
    content:
      "Hari demi hari kami saling mengenal, belajar memahami, dan melewati berbagai cerita. Setiap momen membuat kami semakin yakin untuk terus bersama.",
  },
  {
    title: "Menuju Hari Bahagia",
    content:
      "Dengan penuh rasa syukur dan doa, kami memutuskan untuk melangkah ke jenjang pernikahan. Semoga perjalanan baru ini selalu dipenuhi cinta, kebahagiaan, dan keberkahan.",
  },
];

export default function LoveStory() {
  return (
    <section className=" px-5 py-20">
      <div className="mx-auto max-w-3xl">

        <h2
          data-aos="fade-down"
           data-aos-delay="100"
          className="
            text-center
            font-feltpen
            text-[#8A1C14]
            text-4xl
            sm:text-5xl
            mb-16
            tracking-[0.18em]
            font-black
          "
        >
          Love Story
        </h2>

        <div className="relative">

          {/* garis */}
          <div
            className="
              absolute
              left-[13px]
              top-3
              bottom-3
              w-[2px]
              bg-[#8A1C14]
              origin-top
              animate-growLine
            "
          />

          <div className="space-y-12">

            {stories.map((story, index) => (
              <Timeline
                key={index}
                title={story.title}
                content={story.content}
                delay={index * 300}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}