import Image from "next/image";

export default function MascotCorner() {
  return (
    <div
      aria-hidden
      className="hidden sm:block fixed bottom-0 left-0 z-50 pointer-events-none select-none"
    >
      <Image
        src="/mascot.png"
        alt=""
        width={320}
        height={320}
        className="w-32 lg:w-40 h-auto"
      />
    </div>
  );
}
