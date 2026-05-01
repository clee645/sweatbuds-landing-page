import Image from "next/image";
import PhoneFrame from "./PhoneFrame";

export default function Hero() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 pt-10 sm:pt-16 lg:pt-24 pb-20 sm:pb-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-24 items-center">
        <div className="text-center lg:text-left lg:pr-0">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-10">
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/app-icon.png"
                alt="Sweatbuds app icon"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
              Sweatbuds
            </span>
          </div>

          <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-ink">
            Sweat together.
            <br />
            Stay together.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted max-w-xl mx-auto lg:mx-0">
            The couples fitness app that turns workouts into wins together.
          </p>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-3 bg-brand text-white font-semibold text-lg px-8 py-4 rounded-full shadow-sm hover:opacity-95 transition"
          >
            <AppleGlyph />
            Download on iOS
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneFrame
            src="/hero-phone.png"
            alt="Sweatbuds app shown on iPhone"
            className="w-[70vw] max-w-[300px] sm:w-[300px] sm:max-w-none lg:w-[340px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function AppleGlyph() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
    >
      <path d="M16.365 1.43c0 1.14-.43 2.18-1.14 2.96-.77.86-2.04 1.5-3.05 1.42-.13-1.1.43-2.24 1.13-2.96.78-.82 2.1-1.42 3.06-1.42zM20.5 17.1c-.55 1.27-.81 1.84-1.52 2.96-.99 1.55-2.39 3.49-4.13 3.5-1.55.02-1.95-1-4.06-.99-2.11.01-2.55 1.01-4.1.99-1.74-.02-3.06-1.78-4.05-3.33C-.06 16.92-.34 11.51 2.27 8.69 4.06 6.74 6.84 6.4 8.65 7.42c1.69.96 1.93 1.05 3.36.92 1.4-.13 2-1.06 4.18-1 .67.02 2.92.27 4.36 2.04-3.83 2.1-3.21 7.57-.05 7.72z" />
    </svg>
  );
}
