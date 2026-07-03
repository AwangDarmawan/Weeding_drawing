export default function DiscoBall() {
  return (
    <div className="w-[180px] sm:w-[220px] " data-aos="fade-down-right">
      <svg
        viewBox="0 0 220 260"
        className="w-full h-auto  text-[#8A1C14]"
        
      >
        <line
          x1="110"
          y1="0"
          x2="110"
          y2="40"
          stroke="currentColor"
          strokeWidth="3"
        />

        <circle
          cx="110"
          cy="120"
          r="70"
          fill="none"
         stroke="currentColor"
          strokeWidth="3"
        />

        <ellipse
          cx="110"
          cy="120"
          rx="70"
          ry="25"
          fill="none"
         stroke="currentColor"
        />

        <ellipse
          cx="110"
          cy="120"
          rx="70"
          ry="45"
          fill="none"
         stroke="currentColor"
        />

        <ellipse
          cx="110"
          cy="120"
          rx="70"
          ry="60"
          fill="none"
       stroke="currentColor"
        />

        <line
          x1="40"
          y1="120"
          x2="180"
          y2="120"
       stroke="currentColor"
        />

        <line
          x1="60"
          y1="70"
          x2="160"
          y2="170"
       stroke="currentColor"
        />

        <line
          x1="160"
          y1="70"
          x2="60"
          y2="170"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
}