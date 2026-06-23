import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { changeTheme } =
    useContext(ThemeContext);

  const [open, setOpen] =
    useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="
        p-2
        rounded-lg
        bg-white/10
        backdrop-blur-lg
        "
      >
        🎨
      </button>

      {open && (
        <div
          className="
          absolute
          right-0
          mt-2
          w-44
          bg-white
          text-black
          rounded-xl
          shadow-xl
          overflow-hidden
          "
        >

          <button
            onClick={() => {
                changeTheme("light");
                setOpen(false);
            }}
            className="
            block
            w-full
            text-left
            px-4
            py-3
            hover:bg-blue-500
            hover:text-white
            "
          >
            ⚪ Light
          </button>

          <button
            onClick={() => {
            changeTheme("warm");
            setOpen(false);
            }}
            className="
            block
            w-full
            text-left
            px-4
            py-3
            hover:bg-orange-500
            hover:text-white
            "
          >
            🟠 Warm
          </button>

          <button
            onClick={() => {
            changeTheme("cool");
            setOpen(false);
            }}
            className="
            block
            w-full
            text-left
            px-4
            py-3
            hover:bg-cyan-500
            hover:text-white
            "
          >
            🔵 Cool
          </button>

          <button
            onClick={() => {
            changeTheme("dark");
            setOpen(false);
            }}
            className="
            block
            w-full
            text-left
            px-4
            py-3
            hover:bg-slate-800
            hover:text-white
            "
          >
            ⚫ Dark
          </button>

        </div>
      )}
    </div>
  );
}