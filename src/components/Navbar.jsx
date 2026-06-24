import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  User,
  Braces,
  BookOpen,
  FolderGit2,
  Send,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

import { GraduationCap } from "lucide-react";


const links = [
  {
    name: "home",
    icon: LayoutDashboard,
  },
  {
    name: "about",
    icon: User,
  },
  {
    name: "skills",
    icon: Braces,
  },
 {
  name: "education",
  icon: GraduationCap,
},
  {
    name: "projects",
    icon: FolderGit2,
  },
  {
    name: "contact",
    icon: Send,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      w-full
      bg-slate-950/80
      backdrop-blur-md
      border-b
      border-white/10
      z-50
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}
        <h2
          className="
          text-cyan-400
          font-bold
          text-xl
          "
        >
          Hassan
        </h2>

        {/* Desktop Menu */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-6
          "
        >
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={`#${link.name}`}
                className="
                flex
                items-center
                gap-2
                capitalize
                hover:text-cyan-400
                transition
                "
              >
                <Icon size={18} />
                {link.name}
              </a>
            );
          })}

          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div
          className="
          md:hidden
          flex
          items-center
          gap-3
          "
        >
          <ThemeToggle />

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
            p-2
            rounded-lg
            hover:bg-white/10
            transition
            "
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          md:hidden
          bg-slate-950/95
          backdrop-blur-lg
          border-t
          border-white/10
          "
        >
          <div className="flex flex-col py-4">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.name}
                  href={`#${link.name}`}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                  flex
                  items-center
                  gap-3
                  px-6
                  py-3
                  capitalize
                  hover:text-cyan-400
                  hover:bg-white/5
                  transition
                  "
                >
                  <Icon size={18} />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}