"use client";

import { useState } from "react";

type Props = {
  videoId: string;
  title?: string;
};

export default function YouTubeEmbed({ videoId, title = "Video" }: Props) {
  const [loaded, setLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer border border-dark-border hover:border-gold/30 transition-all duration-300"
        aria-label={`Play: ${title}`}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gold/90 group-hover:bg-gold group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-[0_0_30px_rgba(200,168,78,0.4)]">
            <svg className="w-7 h-7 md:w-8 md:h-8 text-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-dark-border">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
