import ThemeToggle from "./ThemeToggle";

const links = [
  "home",
  "about",
  "skills",
  "education",
  "services",
  "projects",
];

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      w-full
      bg-slate-950/80
      backdrop-blur-md
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
        justify-between
        items-center
        "
      >
        <h2
          className="
          text-cyan-400
          font-bold
          text-xl
          "
        >
          Hassan
        </h2>
              <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>

        <div className="flex gap-6">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="
              capitalize
              hover:text-cyan-400
              transition
              "
            >
              {link}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}