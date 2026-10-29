import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { profile } from "./data";

type Props = {
  size: "hero" | "about";
  className?: string;
};

const sizes = {
  // ~160px on mobile, ~220px on desktop
  hero: "size-40 md:size-[220px] text-5xl md:text-6xl",
  about: "size-28 md:size-36 text-3xl md:text-4xl",
};

export function ProfilePhoto({ size, className }: Props) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image may fail before React hydrates (onError would be missed), so re-check on mount.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border-2 border-primary/70 shadow-glow",
        sizes[size],
        className,
      )}
    >
      {failed ? (
        <div
          role="img"
          aria-label={profile.photoAlt}
          className="flex size-full items-center justify-center bg-gradient-primary font-bold tracking-tight text-primary-foreground"
        >
          {profile.initials}
        </div>
      ) : (
        <img
          ref={imgRef}
          src="/vaishnavi-kolhe.jpg"
          alt={profile.photoAlt}
          loading="lazy"
          decoding="async"
          width={480}
          height={480}
          onError={() => setFailed(true)}
          className="size-full object-cover object-[50%_35%]"
        />
      )}
    </div>
  );
}
