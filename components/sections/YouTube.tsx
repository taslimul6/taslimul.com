import Image from "next/image";
import { videos, youtube } from "@/data/site";
import type { Video } from "@/data/types";
import { Button, Container, Reveal, SectionHeader, Tag } from "@/components/ui";
import { isRealLink } from "@/lib/cn";

/** Video card. Uses `video.thumbnail` if set, otherwise a dark grid placeholder. */
function VideoCard({ video, delay }: { video: Video; delay: number }) {
  // Placeholder videos (url "#") render as a plain card instead of a dead link
  const Wrapper = isRealLink(video.url) ? "a" : "div";
  const linkProps = isRealLink(video.url)
    ? { href: video.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Reveal delay={delay}>
      <Wrapper {...linkProps} className="group block">
        <div className="relative aspect-video overflow-hidden border border-ink bg-term">
          {video.thumbnail ? (
            <Image
              src={video.thumbnail}
              alt=""
              fill
              sizes="(min-width: 640px) 380px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="grid-bg-light absolute inset-0" aria-hidden="true" />
          )}
          <Tag tone={video.type === "TUTORIAL" ? "lime" : "white"} className="absolute left-3 top-3 text-[10px]">
            {video.type}
          </Tag>
          <span className="absolute inset-0 m-auto flex h-12 w-12 items-center justify-center bg-volt text-white transition-transform group-hover:scale-110">
            ▶
          </span>
          <span className="absolute bottom-3 right-3 font-mono text-[10px] text-white/70">{video.duration}</span>
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold transition-colors group-hover:text-volt">{video.title}</h3>
      </Wrapper>
    </Reveal>
  );
}

/** Latest YouTube videos in a 3-column grid. */
export function YouTube() {
  return (
    <section id="youtube" className="scroll-mt-16 border-y border-rule bg-panel">
      <Container className="py-20 sm:py-28">
        <SectionHeader
          index="04"
          path="broadcast"
          title="Learn with me on YouTube"
          action={
            <Button href={youtube.url} external className="px-4 py-2">
              {youtube.handle} ↗
            </Button>
          }
        />
        <div className="grid gap-5 sm:grid-cols-3">
          {videos.map((video, i) => (
            <VideoCard key={i} video={video} delay={i * 0.05} />
          ))}
        </div>
      </Container>
    </section>
  );
}
