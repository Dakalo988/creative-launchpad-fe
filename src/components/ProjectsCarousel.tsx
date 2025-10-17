import { useEffect, useRef } from "react";
import obsoleteImg from "@/assets/obsoletekulture.png";
import matumbaImg from "@/assets/matumbamedicalcentre.jpg";
import styleArtImg from "@/assets/styleandartgroup.png";
import violondImg from "@/assets/violondcloud.png";
import hangwaniImg from "@/assets/hangwanifuneral.webp";

type Project = {
  name: string;
  url: string;
  image: string;
};

const projects: Project[] = [
  { name: "Obsolete Kulture", url: "https://obsoletekulture.co.za", image: obsoleteImg },
  { name: "Matumba Medical Centre", url: "https://matumbamedicalcentre.co.za", image: matumbaImg },
  { name: "Style & Art Group", url: "https://styleandartgroup.co.za", image: styleArtImg },
  { name: "Violond Cloud", url: "https://violondcloud.co.za", image: violondImg },
  { name: "Hangwani Funeral", url: "https://hangwanifuneral.co.za", image: hangwaniImg },
];

const DUPLICATION_FACTOR = 2; // duplicate items to create seamless loop

const ProjectsCarousel = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationFrame = 0;
    let offset = 0;

    const speedPxPerSec = 60; // adjust for faster/slower
    const speedPxPerMs = speedPxPerSec / 1000;

    const tick = (ts: number) => {
      const now = performance.now();
      const delta = now - (tick as any)._last || 0;
      (tick as any)._last = now;
      offset += delta * speedPxPerMs;
      const totalWidth = el.scrollWidth / 2; // since we duplicate once
      const translateX = -((offset) % totalWidth);
      el.style.transform = `translateX(${translateX}px)`;
      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const items = Array.from({ length: DUPLICATION_FACTOR }, () => projects).flat();

  return (
    <section aria-label="Projects we worked on" className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projects we worked on</h2>
          <p className="text-muted-foreground mt-2">Explore a few of our recent client websites</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 will-change-transform" ref={containerRef}>
            {items.map((project, idx) => (
              <a
                key={`${project.url}-${idx}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 group"
              >
                <div className="flex items-center gap-3 pr-5 pl-2 py-2 bg-card border rounded-full text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                  <img
                    src={project.image}
                    alt={`${project.name} website preview`}
                    className="h-8 w-8 rounded-md object-cover border"
                    loading="lazy"
                  />
                  <span className="whitespace-nowrap">{project.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;


