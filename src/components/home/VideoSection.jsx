"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
} from "lucide-react";

export default function VideoSection({
  videoSrc = "/videos/video1.mp4",
  posterSrc = "",
  eyebrow = "Effortless Glam",
  title = "Experience the Collection",
  description = "Watch our latest collection come to life. Discover the craftsmanship and elegance behind every piece.",
}) {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  /* =========================================================
     AUTOPLAY WHEN VIDEO ENTERS VIEWPORT
  ========================================================= */

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    // Always muted initially for browser autoplay permission
    video.muted = true;
    setIsMuted(true);

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.muted = true;

          const playPromise = video.play();

          if (playPromise !== undefined) {
            playPromise.catch(() => {
              setIsPlaying(false);
            });
          }
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();

      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  /* =========================================================
     VIDEO PROGRESS
  ========================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateProgress = () => {
      if (!video.duration || !Number.isFinite(video.duration)) {
        return;
      }

      setProgress(
        (video.currentTime / video.duration) * 100
      );
    };

    video.addEventListener(
      "timeupdate",
      updateProgress
    );

    return () => {
      video.removeEventListener(
        "timeupdate",
        updateProgress
      );
    };
  }, []);

  /* =========================================================
     PLAY / PAUSE
  ========================================================= */

  const togglePlay = async (e) => {
    e?.stopPropagation();

    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        console.log("Video play error:", error);
      }
    } else {
      video.pause();
    }
  };

  /* =========================================================
     MUTE / UNMUTE
  ========================================================= */

  const toggleMute = (e) => {
    e.stopPropagation();

    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;

    setIsMuted(video.muted);
  };

  /* =========================================================
     TITLE
  ========================================================= */

  const titleWords = title.trim().split(/\s+/);

  const titleFirstPart = titleWords
    .slice(0, -1)
    .join(" ");

  const titleLastWord = titleWords.at(-1);

  return (
    <section className="bg-[#f7f3ec] pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          className="mx-auto mb-8 flex w-full max-w-4xl flex-col items-center text-center sm:mb-10 lg:mb-12"
        >
          {/* Eyebrow */}

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a876]">
            <Sparkles size={13} />
            {eyebrow}
          </span>

          {/* Heading */}

          <h2 className="mt-3 font-serif text-3xl font-medium leading-[1.08] text-[#2a2a26] sm:text-4xl lg:text-5xl xl:text-6xl">
            {titleFirstPart}{" "}
            <span className="text-[#c9a876]">
              {titleLastWord}
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#2a2a26] sm:text-base sm:leading-7 lg:text-lg">
            {description}
          </p>
        </motion.div>

        {/* =====================================================
            VIDEO
        ====================================================== */}

        <motion.div
          ref={sectionRef}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          className="group relative mx-auto aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl bg-[#18251f] shadow-[0_24px_70px_rgba(28,44,36,0.22)] sm:aspect-video lg:aspect-video xl:rounded-3xl"
          onClick={togglePlay}
        >
          {/* Decorative glow */}

          <div className="pointer-events-none absolute -inset-x-10 -top-12 z-0 h-20 bg-[#c9a876]/20 blur-3xl" />

          {/* ===================================================
              VIDEO
          ==================================================== */}

          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc || undefined}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* ===================================================
              VIDEO OVERLAY
          ==================================================== */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-black/15" />

          {/* ===================================================
              PLAY / PAUSE BUTTON
          ==================================================== */}

          <div
            className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              isPlaying
                ? "opacity-0 group-hover:opacity-100"
                : "opacity-100"
            }`}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
              {isPlaying ? (
                <Pause
                  size={28}
                  className="text-[#2f4a3e] sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                  fill="#2f4a3e"
                />
              ) : (
                <Play
                  size={28}
                  className="ml-1 text-[#2f4a3e] sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                  fill="#2f4a3e"
                />
              )}
            </span>
          </div>

          {/* ===================================================
              MUTE BUTTON
          ==================================================== */}

          <button
            type="button"
            onClick={toggleMute}
            aria-label={
              isMuted
                ? "Unmute video"
                : "Mute video"
            }
            className="absolute bottom-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-all duration-300 hover:bg-black/65 sm:bottom-6 sm:right-6 lg:h-11 lg:w-11"
          >
            {isMuted ? (
              <VolumeX size={17} />
            ) : (
              <Volume2 size={17} />
            )}
          </button>

          {/* ===================================================
              PROGRESS BAR
          ==================================================== */}

          <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white/15">
            <div
              className="h-full bg-[#c9a876] transition-[width] duration-200"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}