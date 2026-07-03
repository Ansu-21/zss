"use client";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export default function Img({ src, alt = "", className = "" }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={(e) => { e.currentTarget.style.display = "none"; }}
    />
  );
}
