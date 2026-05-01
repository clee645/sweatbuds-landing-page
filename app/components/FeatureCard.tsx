import PhoneFrame from "./PhoneFrame";

type Props = {
  image: string;
  alt: string;
  title: string;
  body: string;
  imageStyle?: React.CSSProperties;
  imageClassName?: string;
  phoneClassName?: string;
  topAligned?: boolean;
};

export default function FeatureCard({
  image,
  alt,
  title,
  body,
  imageStyle,
  imageClassName,
  phoneClassName,
  topAligned,
}: Props) {
  return (
    <div>
      <div
        className={`bg-white rounded-3xl h-[460px] sm:h-[500px] flex justify-center px-6 overflow-hidden ${
          topAligned ? "items-start pt-12" : "items-end pt-10"
        }`}
      >
        <PhoneFrame
          src={image}
          alt={alt}
          className={
            phoneClassName ??
            (topAligned
              ? "w-[300px] sm:w-[340px]"
              : "w-[200px] sm:w-[220px] translate-y-6")
          }
          imageStyle={imageStyle}
          imageClassName={imageClassName}
        />
      </div>
      <h3 className="mt-8 text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-md">
        {body}
      </p>
    </div>
  );
}
