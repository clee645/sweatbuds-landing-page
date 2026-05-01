import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
  priority?: boolean;
  showNotch?: boolean;
};

export default function PhoneFrame({
  src,
  alt,
  className = "",
  imageClassName = "",
  imageStyle,
  priority,
  showNotch = true,
}: Props) {
  return (
    <div
      className={`relative bg-neutral-900 shadow-2xl ring-1 ring-black/30 ${className}`}
      style={{ borderRadius: "14% / 6.5%", padding: "3.5%" }}
    >
      <div
        className="relative w-full overflow-hidden bg-black ring-1 ring-inset ring-white/5"
        style={{ aspectRatio: "924 / 2000", borderRadius: "11% / 5%" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 60vw, 340px"
          className={`object-cover ${imageClassName}`}
          style={imageStyle}
          priority={priority}
        />

        {showNotch && (
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[3.4%] w-[38%] bg-black z-10"
            style={{ borderRadius: "0 0 9999px 9999px" }}
          />
        )}
      </div>
    </div>
  );
}
