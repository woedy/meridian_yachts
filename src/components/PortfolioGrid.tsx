import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const yachts = [
  {
    img: "/images/yacht-1.jpg",
    name: "Project Aurora 60",
    desc: "60m displacement yacht with transatlantic range, beach club, helipad conversion zone, and owner deck privacy suite.",
  },
  {
    img: "/images/yacht-2.jpg",
    name: "Ocean Crown Explorer",
    desc: "Ice-class capable explorer with long-range fuel architecture, expedition tender platform, and high-latitude charter readiness.",
  },
  {
    img: "/images/yacht-3.jpg",
    name: "Celestial 45",
    desc: "45m fast-cruising platform featuring hybrid propulsion options, indoor-outdoor lounge transitions, and wellness-focused interiors.",
  },
  {
    img: "/images/yacht-4.jpg",
    name: "Sovereign 72",
    desc: "72m flagship concept designed for multi-generational living, two pools, cinema deck, and full-service guest operations.",
  },
  {
    img: "/images/yacht-5.jpg",
    name: "Horizon Blade",
    desc: "Performance-led yacht with refined naval lines, active stabilization package, and advanced bridge integration for extended passages.",
  },
  {
    img: "/images/yacht-6.jpg",
    name: "Elara 55",
    desc: "55m contemporary profile balancing charter appeal and private owner comfort with elevated service logistics planning.",
  },
];

const PortfolioGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!api) return;
    api.scrollTo(selectedIndex, true);
  }, [api, selectedIndex]);

  return (
    <section id="portfolio" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Fleet Highlights</p>
          <h2 className="font-display text-3xl md:text-5xl">Representative Brokerage & Build Projects</h2>
        </div>

        <Dialog>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yachts.map((y, i) => (
              <DialogTrigger asChild key={y.name}>
                <div
                  className={`group relative overflow-hidden cursor-pointer transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                  onClick={() => setSelectedIndex(i)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={y.img}
                      alt={y.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-500 flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="font-display text-xl text-foreground">{y.name}</h3>
                      <p className="text-sm text-muted-foreground font-body mt-1">{y.desc}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
            ))}
          </div>

          <DialogContent className="max-w-5xl bg-background/95 border-none p-0 overflow-hidden sm:rounded-none">
            <DialogTitle className="sr-only">Yacht Gallery</DialogTitle>
            <Carousel setApi={setApi} className="w-full h-full">
              <CarouselContent>
                {yachts.map((y) => (
                  <CarouselItem key={y.name} className="flex items-center justify-center p-4">
                    <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden rounded-lg shadow-2xl">
                      <img src={y.img} alt={y.name} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10">
                        <h3 className="font-display text-2xl md:text-4xl text-white mb-2">{y.name}</h3>
                        <p className="text-sm md:text-base text-gray-300 font-body max-w-2xl">{y.desc}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-background/20 hover:bg-background/40 border-none text-white hover:text-white" />
              <CarouselNext className="right-4 bg-background/20 hover:bg-background/40 border-none text-white hover:text-white" />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioGrid;
