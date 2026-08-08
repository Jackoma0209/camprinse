import type { ReactNode } from "react";
import Image from "next/image";
import { getSiteImage, type SiteImageKey } from "@/lib/assets";

type SiteImageProps = {
  imageKey: SiteImageKey;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fallback?: ReactNode;
};

export function SiteImage({
  imageKey,
  className,
  fill = false,
  sizes,
  priority = false,
  width,
  height,
  fallback = null,
}: SiteImageProps) {
  const image = getSiteImage(imageKey);

  if (!image.available) {
    return <>{fallback}</>;
  }

  if (fill) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
      />
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={width ?? 960}
      height={height ?? 720}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
