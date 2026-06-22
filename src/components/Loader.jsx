import { useEffect } from "react";

export default function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className="
      fixed
      inset-0
      bg-slate-950
      flex
      items-center
      justify-center
      z-[99999]
      "
    >
      <div className="inline-block">
  <h1
    className="
    text-cyan-400
    text-4xl
    md:text-5xl
    font-bold
    typing
    "
  >
    &lt;Hassan Shaikh/&gt;
  </h1>

  <div
    className="
    mt-6
    h-[2px]
    bg-slate-800
    rounded-full
    overflow-hidden
    "
  >
    <div className="loading-bar" />
  </div>
</div>
    </div>
  );
}