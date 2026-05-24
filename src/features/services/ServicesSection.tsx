import type { SiteCopy } from "@/lib/site-locale";
import { Container } from "@/features/common/Container";
import { SectionHeading } from "@/features/common/SectionHeading";
import { ServiceCard } from "@/features/services/ServiceCard";
import { getServiceList } from "@/features/services/service-queries";

export function ServicesSection({ copy }: { copy: SiteCopy }) {
  const services = getServiceList(copy);

  return (
    <section id="services" className="bg-kashi-cream py-14 md:py-20">
      <Container>
        <SectionHeading
          eyebrow={copy.services.section.eyebrow}
          title={copy.services.section.title}
          description={copy.site.description}
        />

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} copy={copy} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
