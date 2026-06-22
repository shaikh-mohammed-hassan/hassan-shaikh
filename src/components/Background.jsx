export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* TOP RIGHT WAVE */}
      <div className="wave-orbit wave-orbit-1">
        <svg
          width="950"
          height="950"
          viewBox="0 0 900 900"
          className="blur-[45px]"
        >
          <path
            d="
            M900 0
            V900
            C760 760 650 620 520 420
            C430 280 380 130 420 0
            Z"
            fill="url(#grad1)"
          />

          <defs>
            <linearGradient id="grad1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity=".55" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity=".08" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* BOTTOM LEFT WAVE */}
      <div className="wave-orbit wave-orbit-2">
        <svg
          width="1200"
          height="900"
          viewBox="0 0 1200 900"
          className="blur-[55px]"
        >
          <path
            d="
            M0 280
            C200 180 450 320 640 500
            C860 720 1030 730 1200 690
            V900
            H0
            Z"
            fill="url(#grad2)"
          />

          <defs>
            <linearGradient id="grad2">
              <stop offset="0%" stopColor="#2563EB" stopOpacity=".35" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity=".18" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </div>
  );
}