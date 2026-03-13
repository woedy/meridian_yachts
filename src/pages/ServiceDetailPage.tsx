import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import { getServiceBySlug } from "@/data/services";
import { Link, Navigate, useParams } from "react-router-dom";

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="section-padding border-b border-border">
          <div className="max-w-6xl mx-auto px-6">
            <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-primary font-body">
              ← Back to Services
            </Link>
            <div className="grid lg:grid-cols-2 gap-10 mt-6 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary font-body mb-4">Core Service Detail</p>
                <h1 className="font-display text-4xl md:text-6xl">{service.title}</h1>
                <p className="mt-6 text-muted-foreground font-body font-light text-lg leading-relaxed">
                  {service.detailIntro}
                </p>
              </div>
              <div className="overflow-hidden border border-border bg-card">
                <img src={service.image} alt={service.title} className="w-full h-[360px] object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {service.detailSections.map((section) => (
              <article key={section.heading} className="border border-border p-7 bg-card/40">
                <h2 className="font-display text-2xl mb-3">{section.heading}</h2>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="border border-border bg-secondary p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-body">Service Scope</p>
              <p className="mt-3 text-muted-foreground font-body leading-relaxed">{service.scope}</p>
              <ul className="mt-6 grid md:grid-cols-3 gap-4">
                {service.highlights.map((item) => (
                  <li key={item} className="text-sm text-foreground/90 border border-border p-4 bg-card">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
